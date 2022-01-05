import React, { Component } from "react";
import axios from "../config/axios"

interface IProps {
}

interface IState {
    message: string;
    peserta?: string;
}



class Header extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            message: "FSD OCBC BATCH ke-2!",
            peserta: " "
        };
    }
    getUsersData() {
        axios
            .get(`/users`, {})
            .then(res => {
                const data = res.data
                console.log(data)
                const pesertas = data.map((u:any) =>
                    u.name
                )
                const peserta = pesertas.join(', ')

                console.log(peserta)

                this.setState({
                    peserta
                })


            })
            .catch((error) => {
                console.log(error)
            })

    }
    componentDidMount() {
        this.getUsersData()
    }

    render() {
        return (
            <h3>
                Hello kelas {this.state.message} 
                <br/>
                dengan peserta:
                <br/> 
                {this.state.peserta}
            </h3>
        )
    }
}

export default Header