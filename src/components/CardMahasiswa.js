import React from "react";
import { Link } from "react-router-dom";

const CardMahasiswa = (props) => {
  return (
    <tr
      style={{
        borderBottom: "1px solid gray",
        padding: "15px",
      }}
    >
      <td className="tb-mahasiswa">{props.data.nama}</td>
      <td className="tb-mahasiswa">{props.data.nim}</td>
      <td className="tb-mahasiswa">{props.data.kelas}</td>
      <td className="tb-mahasiswa">{props.data.semester}</td>
      <td className="tb-mahasiswa">{props.data.jenisKelamin}</td>
      <td className="tb-mahasiswa">{props.data.alamat}</td>
      <td className="tb-mahasiswa">
        <button
          className="btn btn-danger"
          style={{ marginRight: "10px" }}
          onClick={() => props.remove(props.data._id)}
        >
          HAPUS
        </button>
        <Link to={"/update/" + props.data._id} className="btn btn-success">
          UPDATE
        </Link>
      </td>
    </tr>
  );
};

export default CardMahasiswa;

{
  /* <p>Nama : {props.data.nama} </p>
      <p>Nim : {props.data.nim} </p>
      <p>Kelas : {props.data.kelas} </p>
      <p>Semester : {props.data.semester} </p>
      <p>Jenis Kelamin : {props.data.jenisKelamin} </p>
      <p>Alamat : {props.data.alamat} </p>
      <button
        className="btn btn-danger"
        style={{ marginRight: "10px" }}
        onClick={() => props.remove(props.data._id)}
      >
        HAPUS
      </button>
      <Link to={"/update/" + props.data._id} className="btn btn-success">
        UPDATE
      </Link> */
}
{
  /* <hr /> */
}
