import React, { Component } from 'react'
// import { Rnd } from "react-rnd";
import SplitPane from 'react-split-pane'
import Pane from 'react-split-pane/lib/Pane';
import './index.css';



export default class Workspace extends Component {


    render() {
        return (
            <div style={{ height: '100%' }}>
                <SplitPane split="vertical" >
                    <SplitPane split="horizontal" >
                        <SplitPane split="vertical" >
                            <Pane minSize="3%" >minSize="10%" maxSize="600px"</Pane>
                            <Pane initialSize="80%" minSize="3%" >initialSize="50%" minSize="50px" maxSize="80%"</Pane>
                        </SplitPane>
                        <Pane initialSize="30%" minSize="3%" >initialSize="50%" minSize="50px" maxSize="80%"</Pane>
                    </SplitPane>
                    <SplitPane split="horizontal" initialSize="20%">
                        <Pane minSize="3%" >minSize="10%" maxSize="600px"</Pane>
                        <Pane initialSize="70%" minSize="3%" >initialSize="50%" minSize="50px" maxSize="80%"</Pane>
                    </SplitPane>
                </SplitPane>;

            </div>
        )
    }
}