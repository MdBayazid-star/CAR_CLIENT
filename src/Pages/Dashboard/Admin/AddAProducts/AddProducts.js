import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";

const AddProducts = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    axios
      .post("https://gentle-temple-66262.herokuapp.com/cars", data)
      .then((res) => {
        if (res.data.insertedId) {
          alert("added Successfully");
          reset();
        }
      });
  };
  return (
    <div className="addProducts p-5 shadow">
      <h2 className="ts-3 color-pink text-center mb-4 fw-bold">
        Add A Products
      </h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="ts-4 d-block w-100 my-3"
          {...register("name", {
            required: true,
            maxLength: 20,
          })}
          placeholder="Name"
        />
        <textarea
          className="ts-4 d-block w-100 my-3"
          {...register("details")}
          placeholder="Description"
        />
        <input
          className="ts-4 d-block w-100 my-3"
          type="number"
          {...register("price")}
          placeholder="price"
        />
        <input
          className="ts-4 d-block w-100 my-3"
          {...register("img")}
          placeholder="image URL"
        />
        <input
          className="ts-4 d-block w-100 my-3"
          {...register("review")}
          placeholder="Review"
        />
        <input
          className="ts-4 d-block w-100 my-3"
          {...register("Car_BODY")}
          placeholder="CAR BODY"
        />
        <input
          className="ts-4 d-block w-100 my-3"
          {...register("Car_DRIVE")}
          placeholder="CAR DRIVE"
        />
        <input
          className="ts-4 d-block w-100 my-3"
          {...register("Car_MILEAGE")}
          placeholder="CAR MILEAGE"
        />
        <input
          className="ts-4 d-block w-100 my-3"
          {...register("Car_FUEL_TYPE")}
          placeholder="CAR FUEL TYPE"
        />
        <input
          className="ts-4 d-block w-100 my-3"
          {...register("Car_TRANSMISSION")}
          placeholder="CAR RANSMISSION"
        />
        <input
          className="ts-4 d-block w-100 my-3"
          {...register("Car_TRANSMISSION")}
          placeholder="CAR RANSMISSION"
        />
        <input
          className="ts-4 d-block w-100 my-3"
          {...register("Car_STOCK_ID")}
          placeholder="CAR Car STOCK ID"
        />
        <input
          className="ts-4 d-block w-100 my-3"
          {...register("Dealer")}
          placeholder="Dealer"
        />
        <input className="btn-Car" value="ADD" type="submit" />
      </form>
    </div>
  );
};

export default AddProducts;
