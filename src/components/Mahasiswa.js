import React, { Component, Fragment, useEffect, useState } from "react";
import CardMahasiswa from "./CardMahasiswa";
import axios from "axios";
import { Link } from "react-router-dom";

const Mahasiswa = () => {
  const [data, setData] = useState([]);

  const getDataApi = () => {
    axios.get("http://localhost:8080/mahasiswa").then((res) => {
      setData(res.data);
    });
  };

  const handlerRemove = (data) => {
    console.log(data);
    axios.delete(`http://localhost:8080/mahasiswa/${data}`).then((res) => {
      console.log(res);
      getDataApi();
    });
  };

  const handlerUpdate = (data) => {
    console.log(data);
  };

  useEffect(() => getDataApi(), []);

  return (
    <Fragment>
      <Link className="btn btn-success" to="/add">
        TAMBAH
      </Link>
      <div style={{ marginTop: "20px", overflowX: "auto" }}>
        <table width="100%" style={{ padding: "10px" }}>
          <tr style={{ borderBottom: "1px solid gray" }}>
            <th className="tb-mahasiswa">NAMA</th>
            <th className="tb-mahasiswa">NIM</th>
            <th className="tb-mahasiswa">KELAS</th>
            <th className="tb-mahasiswa">SEMESTER</th>
            <th className="tb-mahasiswa">JENIS KELAMIN</th>
            <th className="tb-mahasiswa">ALAMAT</th>
            <th className="tb-mahasiswa">ACTION</th>
          </tr>
          {data.map((mhs, index) => {
            return (
              <CardMahasiswa
                key={mhs.nim}
                data={mhs}
                remove={handlerRemove}
                update={handlerUpdate}
              />
            );
          })}
        </table>
      </div>
    </Fragment>
  );
};

export default Mahasiswa;
