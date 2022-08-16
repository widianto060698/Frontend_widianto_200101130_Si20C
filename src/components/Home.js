import React from "react";
import MyFoto from "../assets/image/myfoto.jpg";

const Home = () => {
  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <img
          src={MyFoto}
          alt=""
          width={200}
          height={200}
          style={{ borderRadius: "50%" }}
        />
        <h1>WIDIANTO</h1>
        <h6>(Web Developer)</h6>
        <hr />
        <h4>Overview</h4>
        <p>
          Hi, saya adalah web developer yang berdomisisli di Surakarta. Saat ini
          sedang belajar HTML di Petnai Kode
        </p>
        <div style={{ maxWidth: "600px", margin: "3em auto" }}>
          <table border="1" width="100%">
            <tr>
              <th style={{ textAlign: "center" }}>NO</th>
              <th style={{ textAlign: "center" }}>BIODATA</th>
              <th style={{ textAlign: "center" }}>BIODATA</th>
            </tr>
            <tr>
              <td>1</td>
              <td>NAMA</td>
              <td>WIDIANTO</td>
            </tr>
            <tr>
              <td>2</td>
              <td>NIM</td>
              <td>200101130</td>
            </tr>
            <tr>
              <td>3</td>
              <td>TTL</td>
              <td>KARANGANYAR, 06 JUNI 1998</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Alamat</td>
              <td>GAWANAN BARAT RT 1 RW 1</td>
            </tr>
            <tr>
              <td>5</td>
              <td>JENIS KELAMIN</td>
              <td>LAKI LAKI</td>
            </tr>
          </table>
        </div>

        <div style={{ maxWidth: "600px", margin: "3em auto" }}>
          <table border="1" width="100%">
            <tr>
              <th style={{ textAlign: "center" }}>NO</th>
              <th style={{ textAlign: "center" }}>SKILL</th>
              <th style={{ textAlign: "center" }}>PENGALAMAN</th>
            </tr>
            <tr>
              <td>1</td>
              <td>HTML (Expert)</td>
              <td>Freelancer di Internet</td>
            </tr>
            <tr>
              <td>2</td>
              <td>CSS (Beginner)</td>
              <td>Leaeder Local Linux Community</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Javascript (Beginner)</td>
              <td>Leaeder Local Linux Community</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Home;
