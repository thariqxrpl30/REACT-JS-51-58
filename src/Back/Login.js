import React from 'react';
import { link } from "../Axios/link";
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';


const Login = () => {

    //untuk useForm / react hook form
    const {
        register,
        handleSubmit,
        reset
    } = useForm();

    //vriabel untuk useHistory
    const navigate = useNavigate();

    //function untuk login
    async function login(data) {  
        //mengirim inputan ke api
        const res = await link.post('/login', data);
        console.log(res.data.token);

        let token = await res.data.token;

        //menyimpan isi token ke dalam sessionStorage
        sessionStorage.setItem('token', token);

        //mengisi navbar
        sessionStorage.setItem('email', res.data.data.email);
        sessionStorage.setItem('level', res.data.data.level);

        reset();

        if (getToken() != 'undefined') {
            // console.log('Email atau Password salah');
            navigate('/admin/home'); //ini adalah redirect utk menuju halaman admin
            window.location.reload();
        }
    }
    //mengambil isi dr sessionstorage
    const getToken = ()=>(sessionStorage.getItem('token'));

    return (
        <div>
            <div className="row text-center mt-4 mb-2">
                <h2 className="display-4">LOGIN</h2>
            </div>

            <div className="row">
                <div className="col-4 mx-auto">
                    <form onSubmit={handleSubmit(login)}>
                        <div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                <input type="email" className="form-control" name='email' placeholder='Masukkan Email' aria-describedby="emailHelp" {...register("email", { required: true })} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password" className="form-control" name='password' placeholder='Masukkan Password' {...register("password", { required: true })} />
                            </div>
                            
                            <button type="submit" className="btn btn-primary">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
