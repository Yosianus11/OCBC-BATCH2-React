import React, { Component } from "react";

interface IProps {
    logos:string;
    batch:string;
}

interface IState {
    message: string;
    counter: number;
}



class Header extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            message: "FSD OCBC BATCH ke-"+ this.props.batch +"!!",
            counter: 0
        };
    }
    changeMess = (mess: string, stat: boolean) => {

        this.setState({
            message: mess
        })
    }

    changeCounter = (type: string) => {

        const oldCounter = this.state.counter

        switch (type) {
            case 'increment':
                this.setState({
                    counter: oldCounter >= 10 ? 0 : this.state.counter + 1
                })
                break
            case 'decrement':
                this.setState({
                    counter: oldCounter <= -10 ? 0 : this.state.counter - 1
                })
                break
        }
    }

    render() {
        return (
            <>
                <h3>
                    Hello kelas {this.state.message}
                </h3>
                <button onClick={() => this.changeMess(' Materi React!!!', false)}>
                    Ganti nama, gan!
                </button>

                <br />

                <h3>
                    {this.state.counter}
                </h3>
                <button onClick={() => this.changeCounter('increment')}>
                    let's Count
                </button>
                <button onClick={() => this.changeCounter('decrement')}>
                    let's Count
                </button>
                <br/>
                <img src={this.props.logos} alt="logo" />

            </>
        )
    }
}



export default Header