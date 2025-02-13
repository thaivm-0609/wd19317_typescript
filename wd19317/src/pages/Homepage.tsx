import axios from "axios"
import { useState, useEffect } from "react"
import { Product } from "../types/Product"

function Homepage() {
    const [products, setProducts] = useState<Product[]>([]);

    const getList = async () => {
        try {
            //B1: call api de lay du lieu tu json-server
            const { data } = await axios.get('http://localhost:3000/products');
            //B2: gọi hàm setProducts để
            // gán dữ liệu mà json-server trả về cho biến products
            setProducts(data);
        } catch (error) {
            console.log(error);
        }
    }

    const delPro = async (id: number) => {
        try {
            if (window.confirm('Are you sure?')) {
                await axios.delete('http://localhost:3000/products/'+id);
                alert('Delete success');
                getList(); //gọi hàm getList để load lại danh sách sản phẩm mới
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getList(); //gọi hàm getList ngay khi load trang
    }, []);

    return (
        <div>
            <h1>Danh sách sản phẩm</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Image</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((p,index) => (
                        <tr key={index}>
                            <td>{p.id}</td>
                            <td>{p.name}</td>
                            <td>{p.price}</td>
                            <td>
                                <img src={p.image} alt="" />
                            </td>
                            <td>
                                <a className="btn btn-info" href={"/detail/"+p.id}>Detail</a>
                                <a className="btn btn-warning" href={"/edit/"+p.id}>Edit</a>
                                <a className="btn btn-danger" onClick={() => delPro(p.id)}>Delete</a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Homepage