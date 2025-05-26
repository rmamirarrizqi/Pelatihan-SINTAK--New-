import React from "react";

function TestComponent() {
  return (
    <div>
      <h1>HELLO SINTAK!</h1>
      <hr />
      <h1 style={{ textAlign: "center", color: "royalblue" }}>
        SINTAK DAY - 2
      </h1>
      <hr />
      <p style={{ font: "caption", fontSize: "20px" }}>
        Penulis: R. M. Amir Arrizqi
      </p>
      <p style={{ font: "caption", fontSize: "20px" }}>
        Ditulis pada: Senin, 19 Mei 2025
      </p>
      <br />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src="src\assets\Omen.png"
          alt="Omen"
          style={{ width: "50%", height: "50%" }}
        />
        <video
          src="src\assets\Anzu.mp4"
          controls
          style={{ width: "25%", height: "25%" }}
        ></video>
      </div>
      <br />
      <p style={{ textAlign: "center", fontSize: "25px" }}>
        Gambar diatas adalah sebuah karakter dari game online yang populer
        dikalangan gamers. Karakter tersebut adalah Omen dari game Valorant.{" "}
        <br />
        Identitas Omen tidak diketahui bahkan dirinya sendiri tidak tau apa yang
        terjadi padanya di masa lalu.
      </p>
      <hr />
      <footer style={{ textAlign: "center", fontSize: "20px" }}>
        Copyright: 2025
      </footer>
      <p className="text-center text-orange-600 font-bold text-1.5xl">
        Hanashiro Anzu
      </p>
    </div>
  );
}

export default TestComponent;
