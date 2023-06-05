import React from 'react';
import { Button, Tag, Table, Popconfirm, Modal, Form, Input, DatePicker, message } from 'antd';
import './Task.less';

const addZero = (text) => {
    text = String(text);
    return text.length < 2 ? '0' + text : text;
};
/**
 * 日期处理
 * @param {*} time
 * @returns
 */
const formatTime = (time) => {
    let arr = time.match(/\d+/g);
    let [, month, day, hours = '00', minutes = '00'] = arr;
    return `${addZero(month)}-${addZero(day)} ${addZero(hours)}:${addZero(minutes)}`;
};
class Task extends React.Component {
    //列数据
    tableColumns = [
        {
            align: 'center',
            title: '编号',
            dataIndex: 'id',
            with: '8%'
        },
        {
            align: 'center',
            title: '任务描述',
            dataIndex: 'task',
            with: '50%'
        },
        {
            align: 'center',
            title: '状态',
            dataIndex: 'state',
            with: '10%',
            render: (text) => (+text === 1 ? '未完成' : '已完成')
        },
        {
            align: 'center',
            title: '完成时间',
            dataIndex: 'time',
            with: '15%',
            render: (_, record) => {
                let { state, time, complete } = record;
                if (+state === 2) time = complete;
                return formatTime(time);
            }
        },
        {
            align: 'center',
            title: '操作',
            render: (_, record) => {
                let { state } = record;
                return (
                    <>
                        <Popconfirm title='您确定删除此任务吗？' onConfirm={() => {}}>
                            <Button type='link'>删除</Button>
                        </Popconfirm>
                        {+state !== 2 ? (
                            <Popconfirm title='您确定把任务设置为完成吗？' onConfirm={() => {}}>
                                <Button type='link'>完成</Button>
                            </Popconfirm>
                        ) : null}
                    </>
                );
            }
        }
    ];
    //组件初始状态
    state = {
        tableDate: [
            {
                id: 1,
                task: '天行健，君子以自强不息',
                state: 1,
                time: '2022-11-29 18:00:00',
                complete: '2022-11-30 12:30:00'
            },
            {
                id: 2,
                task: '地势坤，君子以厚德载物',
                state: 2,
                time: '2022-11-29 18:00:00',
                complete: '2022-11-30 12:30:00'
            }
        ],
        tableLoading: false,
        modalVisible: false,
        confirmLoading: false,
        ruleForm: {
            task: '',
            time: ''
        }
    };
    //对话框和表单处理
    closeModal = () => {
        this.setState({
            modalVisible: false,
            confirmLoading: false
        });
        this.form.resetFields();
    };
    submitModal = async () => {
        try {
            await this.form.validateFields();
            let data = this.form.getFieldsValue();
            message.success('成功');
            console.log(this.form);
            console.log(data);
        } catch {}

        // if (this.state.ruleForm.time) {
        //     let date = this.state.ruleForm.time.format('YYYY-MM-DD HH:mm:ss');
        //     console.log(date);
        // }
    };
    render() {
        let { tableDate, tableLoading, modalVisible, confirmLoading } = this.state;
        return (
            <div className='task-box'>
                <div className='header'>
                    <h2 className='title'>Task OA 任务管理系统 </h2>
                    <Button
                        type='primary'
                        onClick={() => {
                            this.setState({
                                modalVisible: true
                            });
                        }}
                    >
                        新增任务
                    </Button>
                </div>
                <div className='tag-box'>
                    <Tag color='#1677ff'>全部</Tag>
                    <Tag>未完成</Tag>
                    <Tag>已完成</Tag>
                </div>
                <Table
                    dataSource={tableDate}
                    columns={this.tableColumns}
                    loading={tableLoading}
                    pagination={false}
                    rowKey='id'
                />
                <Modal
                    title='新增任务'
                    open={modalVisible}
                    closable={false}
                    confirmLoading={confirmLoading}
                    okText='确认提交'
                    onCancel={this.closeModal}
                    onOk={this.submitModal}
                >
                    <Form ref={(e) => (this.form = e)} initialValues={{ ...this.state.ruleForm }} layout='vertical'>
                        <Form.Item
                            label='任务描述'
                            name='task'
                            validateTrigger='onBlur'
                            rules={[
                                { required: true, message: '任务描述是必填项' },
                                { min: 6, message: '描述至少6字以上' }
                            ]}
                        >
                            <Input.TextArea
                                rows={4}
                                value={this.state.ruleForm.task}
                                onChange={(e) => {
                                    this.setState({
                                        ruleForm: {
                                            ...this.state.ruleForm,
                                            task: e.target.value
                                        }
                                    });
                                }}
                            ></Input.TextArea>
                        </Form.Item>
                        <Form.Item
                            label='预计完成时间'
                            name='time'
                            validateTrigger='onBlur'
                            rules={[{ required: true, message: '预期完成时间是必填项' }]}
                        >
                            <DatePicker
                                showTime
                                value={this.state.ruleForm.time}
                                onChange={(value) => {
                                    this.setState({
                                        ruleForm: {
                                            ...this.state.ruleForm,
                                            time: value
                                        }
                                    });
                                }}
                            />
                        </Form.Item>
                    </Form>
                </Modal>
            </div>
        );
    }
}
export default Task;
