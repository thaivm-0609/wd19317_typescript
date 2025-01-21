import axios from "axios"
import { Product } from "../types/Product"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom" //lấy giá trị id truyền trên url

function Detail() {
    //B1: lấy id bản ghi cần xem chi tiết trên url
    const { id } = useParams();
    
    //B2: khởi tạo biến product, hàm setProduct trong useState
    const [product, setProduct] = useState<Product|undefined>()

    //B3: truyền id lên, để call api lấy thông tin chi tiết
    //khởi tạo hàm getDetail() để lấy thông tin chi tiết
    const getDetail = async (id:string) => {
        //call API để lấy thông tin chi tiết
        const { data } = await axios.get(`http://localhost:3000/products/${id}`);
        //dùng hàm setProduct gán dữ liệu data cho biến product
        setProduct(data);
    }

    //gọi hàm getDetail trong useEffect
    useEffect(() => {
        if (!id) return; //kiểm tra nếu ko có id thì dừng chương trình
        getDetail(id);//nếu có id thì gọi hàm getDetail()
    }, [id]);

    return (
        <div>
            <h1>Detail page</h1>
            <p>{ product?.id }</p>
            <p>{ product?.name }</p>
            <p>{ product?.price }</p>
            <p>
                <img src={product?.image} alt="" />
            </p>
        </div>
    )
}

export default Detail