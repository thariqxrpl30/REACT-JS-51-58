import React, { useState } from "react";
import useGet from "../Hook/useGet";
import Modal from "react-modal";
import { useForm } from "react-hook-form";
import { link } from "../Axios/link";

const User = () => {
  let no = 1;

  const [isi] = useGet("/user/");

  //untuk mengisi modal apakah true atau false
  const [mopen, setMopen] = useState(false);

  //untuk useform
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  //function utk tambah/insert data
  function tambah() {
    setMopen(true);
  }

  //function utk simpan data
  async function simpan(data) {
    let user = {
      email: data.email,
      password: data.level,
      level: data.level,
      relasi: "back",
    };
    reset();
    const res = await link.post("/register", user);
    setMopen(false);
  }

  //function utk button banned/active
  async function status(id) {
      //utk mengambil isi button hrs difilter dulu
      const data = isi.filter( (val)=>val.id===id );

      let statue = 0;
      if (data[0].status === 1) {
          statue = 0;
      } else {
          statue = 1
      }

      let kirim = {
          status: statue
      }

      const res = await link.put('/user/'+id, kirim);
      
  }


  return (
    <div>
      <Modal
        isOpen={mopen}
        onRequestClose={() => setMopen(false)}
        style={{
          overlay: { background: "transparent !important" },
          content: {
            background: "#f1f1f1",
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            borderRadius: "10px",
            width: "50%",
          },
        }}
      >
        <div className="row">
          <div>
            <h3 className="fw-normal">INPUT DATA USER</h3>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <form onSubmit={handleSubmit(simpan)}>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Masukkan email"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span>
                    <em>*Email is required!</em>
                  </span>
                )}
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  placeholder="Masukkan password"
                  {...register("password", { required: true })}
                />
                {errors.password && (
                  <span>
                    <em>*Password is required!</em>
                  </span>
                )}
              </div>
              <div className="mb-3">
                <label htmlFor="level" className="form-label">
                  Level
                </label>
                <br />
                <select
                  className="form-select"
                  name="level"
                  {...register("level", { required: true })}
                >
                  <option value="admin">Admin</option>
                  <option value="kasir">Kasir</option>
                  <option value="koki">Koki</option>
                </select>
                {errors.level && (
                  <span>
                    <em>*Level is required!</em>
                  </span>
                )}
              </div>
              <div className="mb-4">
                <input
                  type="submit"
                  className="btn btn-primary me-2"
                  name="submit"
                  value="Add"
                />
                <input
                  type="submit"
                  className="btn btn-secondary "
                  name="submit"
                  value="Batal"
                  onClick={() => setMopen(false)}
                />
              </div>
            </form>
          </div>
        </div>
      </Modal>

      <div className="row">
        <div>
          <h3 className="display-4">USER INFORMATION</h3>
        </div>
      </div>

      <div className="row mt-2">
        <div>
          <input
            onClick={() => tambah()}
            className="btn btn-primary"
            type="submit"
            value="tambah"
          />
        </div>
      </div>

      <div className="row">
        <table className="table mt-4">
          <thead>
            <tr>
              <th>No</th>
              <th>User</th>
              <th>Level</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {isi.map((val, index) => (
              <tr key={index}>
                <td>{no++}</td>
                <td>{val.email}</td>
                <td>{val.level}</td>
                <td>
                  {val.status === 1 ? (
                    <input
                      className="btn btn-success"
                      type="submit"
                      value="ACTIVE"
                      onClick={ ()=>status(val.id) }
                    />
                  ) : (
                    <input
                      className="btn btn-danger"
                      type="submit"
                      value="BANNED"
                      onClick={ ()=>status(val.id) }
                    />
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default User;
