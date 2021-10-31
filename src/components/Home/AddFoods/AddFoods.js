import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";

const AddFoods = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data)
        axios.post('https://agile-journey-44288.herokuapp.com/foods', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Added Food Successfully');
                    reset();
                }
            })
        }
    return (
        <div>
            <div style={{margin: "100px"}} className="add_foods text-center">
                <h2>Please Add a Food</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input className="mb-3" {...register("name", { required: true, maxLength: 20 })} placeholder="Name" /> <br />
                    <textarea className="mb-3" {...register("description")} placeholder="Description" /> <br />
                    <input className="mb-3" type="number" {...register("price")} placeholder="price" /> <br />
                    <input className="mb-3" {...register("img")} placeholder="image url" /> <br />
                    <input type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddFoods;