import React, { Component } from 'react'
import { Menu, Dropdown, Button, Space, message } from 'antd';
const { SubMenu } = Menu;

export default class Header extends Component {


    render() {
        function handleMenuClick(e) {
            message.info("command: " + e.key);
            console.log('click', e);
        }
        const file = (
            <Menu onClick={handleMenuClick}>
                <Menu.Item key="NewScene">New Scene</Menu.Item>
                <Menu.Item key="OpenScene">Open Scene</Menu.Item>
                <Menu.Item key="SaveScene">Save Scene</Menu.Item>
                <Menu.Divider />
                <SubMenu title="Import">
                    <Menu.Item key="ImportModel">Model</Menu.Item>
                    <Menu.Item key="ImportTexture">Texture</Menu.Item>
                </SubMenu>
            </Menu>
        );
        const edit = (
            <Menu onClick={handleMenuClick}>
                <Menu.Item key="Undo" disabled>Undo</Menu.Item>
                <Menu.Item key="Redo" disabled>Redo</Menu.Item>
                <Menu.Item key="UndoHistory">Undo History</Menu.Item>
                <Menu.Divider />
                <Menu.Item key="Cut" disabled>Cut</Menu.Item>
                <Menu.Item key="Copy" disabled>Copy</Menu.Item>
                <Menu.Item key="Paste" disabled>Paste</Menu.Item>
                <Menu.Item key="Duplicate" disabled>Duplicate</Menu.Item>
                <Menu.Item key="Delete" disabled>Delete</Menu.Item>
                <Menu.Divider />
                <Menu.Item key="Preferences">Editor Preferences</Menu.Item>
                <Menu.Item key="ProjectSettings">Project Settings</Menu.Item>
            </Menu>
        );
        const window = (
            <Menu onClick={handleMenuClick}>
                <Menu.Item key="PlaceActors" disabled>Place Actor</Menu.Item>
                <Menu.Item key="ContentBrowser" disabled>Content Browser</Menu.Item>
                <Menu.Item key="WorldOutliner" disabled>World Outliner</Menu.Item>
                <Menu.Item key="Details" disabled>Details</Menu.Item>
            </Menu>
        );
        const help = (
            <Menu onClick={handleMenuClick}>
                <Menu.Item key="Documents" disabled>Documents</Menu.Item>
                <Menu.Item key="Github" disabled>Github</Menu.Item>
                <Menu.Item key="ReportABug" disabled>Report A Bug</Menu.Item>
                <Menu.Item key="Cut" AboutMe>About Me</Menu.Item>
            </Menu>
        );

        return (
            <div>
                <Space direction="horizontal" wrap align="start">

                    <Dropdown overlay={file} placement="bottomLeft" trigger={['click']} >
                        <Button size="small">File</Button>
                    </Dropdown>
                    <Dropdown overlay={edit} placement="bottomLeft" trigger={['click']}>
                        <Button size="small">Edit</Button>
                    </Dropdown>
                    <Dropdown overlay={window} placement="bottomLeft" trigger={['click']}>
                        <Button size="small">Window</Button>
                    </Dropdown>
                    <Dropdown overlay={help} placement="bottomLeft" trigger={['click']}>
                        <Button size="small">Help</Button>
                    </Dropdown>


                </Space>
            </div>
        )
    }
}
