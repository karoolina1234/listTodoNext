'use client'

import { Alert, Button, Form, Input } from "antd"
import TextArea from "antd/es/input/TextArea"
import { useState } from "react"

const AddPage = () => {

    const [data, setData] = useState({
        titulo: '',
        descricao: ''
    });
    const [status, setStatus] = useState("")



    const handleInputChange = (event: any) => {
        const { name, value } = event.target;
        setData({
            ...data,
            [name]: value
        });
    };


    const addData = () => {

        var item: any[] = JSON.parse(localStorage.getItem('listTodo') || '[]');
        item.push(data);

        localStorage.setItem('listTodo', JSON.stringify(item));

        console.log({ data });

        setStatus("Item adicionado com sucesso");
        setTimeout(() => {
            setStatus("");
            window.location.reload()

        }, 2000)
    }


    return (
        <main className="flex min-h-screen flex-col items-center justify-start p-24">
            <p className="text-white">Adicionar nova tarefa</p>

            <Form className="text-right mt-5">
                <Form.Item label="Titulo">
                    <Input className="max-w-10 w-80" name="titulo" onChange={handleInputChange} />
                </Form.Item>
                <Form.Item label="Descrição">
                    <TextArea className="max-w-10 w-80" name="descricao" rows={4} onChange={handleInputChange} />
                </Form.Item>
                <Form.Item>
                    <Button style={{
                        background: '#e323b3'
                    }} shape="round" type="primary"
                        onClick={addData}>Adicionar</Button>
                </Form.Item>
                {status.length > 1 && <Alert className="text-center" showIcon
                    message={status} type="success" />}
            </Form>
        </main>
    )
}

export default AddPage