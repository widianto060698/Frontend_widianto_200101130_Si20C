import React, { Component, useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const TambahMahasiswa = (props) => {
  const [nim, setNim] = useState("");
  const [nama, setNama] = useState("");
  const [kelas, setKelas] = useState("");
  const [alamat, setAlamat] = useState("");
  const [semester, setSemester] = useState("");
  const [jenisKelamin, setJenisKelamin] = useState("");

  const postToAPi = () => {
    if (nama === "") return toast.error("Nama harus diisi!");
    if (nim === "") return toast.error("Nim harus diisi!");
    if (kelas === "") return toast.error("Kelas harus diisi!");
    if (alamat === "") return toast.error("Alamat harus diisi!");
    if (semester === "") return toast.error("Semester harus diisi!");
    if (jenisKelamin === "") return toast.error("Jenis Kelamin harus diisi!");
    axios
      .post("http://localhost:8080/mahasiswa", {
        nim,
        nama,
        kelas,
        alamat,
        semester,
        jenisKelamin,
      })
      .then(
        (res) => {
          console.log(res);
          props.history.push("/mahasiswa");
        },
        (err) => {
          console.log("error", err);
        }
      );
  };

  const handlerSubmit = (event) => {
    event.preventDefault();
    postToAPi();
  };

  return (
    <div>
      <h1>Tambah Mahasiswa</h1>
      <form onSubmit={handlerSubmit}>
        <input
          type="text"
          name="nama"
          placeholder="nama"
          value={nama}
          onChange={(e) => setNama(e.target.value)}
          style={{ marginBottom: "5px" }}
        />
        <br />
        <input
          type="text"
          name="nim"
          placeholder="nim"
          value={nim}
          onChange={(e) => setNim(e.target.value)}
          style={{ marginBottom: "5px" }}
        />
        <br />
        <input
          type="text"
          name="kelas"
          placeholder="kelas"
          value={kelas}
          onChange={(e) => setKelas(e.target.value)}
          style={{ marginBottom: "5px" }}
        />
        <br />
        <input
          type="text"
          name="semester"
          placeholder="semester"
          value={semester}
          onChange={(e) => setSemester(e.target.value)}
          style={{ marginBottom: "5px" }}
        />
        <br />
        <input
          type="text"
          name="jenis kelamin"
          placeholder="jenis kelamin"
          value={jenisKelamin}
          onChange={(e) => setJenisKelamin(e.target.value)}
          style={{ marginBottom: "5px" }}
        />
        <br />
        <input
          type="text"
          name="alamat"
          placeholder="alamat"
          value={alamat}
          onChange={(e) => setAlamat(e.target.value)}
        />
        <br />
        <Link
          to={"/mahasiswa"}
          className="btn btn-primary"
          style={{ marginTop: "5px", marginRight: "5px" }}
        >
          Kembali
        </Link>
        <input
          type="submit"
          value="simpan"
          className="btn btn-success"
          style={{ marginTop: "5px" }}
        />
      </form>
    </div>
  );
};

export default TambahMahasiswa;
