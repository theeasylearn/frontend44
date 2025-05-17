import React from 'react';
import styled from 'styled-components';
// Define styled-components outside the class
const Article = styled.article`
    display: flex;
    width: 100vw;
    border:1px solid black;
    gap: 10px;
`;
const Div = styled.div`
    background-color: #f0f4f8;
    padding: 20px;
    border-radius: 10px;
    width: calc(100vw/4);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;
const P = styled.p`
        color: #34495e;
        font-size: 18px;
        margin: 10px 0;
        background-color: #ffffff;
        padding: 10px;
        border-radius: 5px;
        transition: transform 0.2s;
`;
const H1 = styled.h1`
    color: #2c3e50;
    margin-bottom: 20px;
    font-size: 28px;
    text-align: center;
`
export class Student extends React.Component {
    constructor(props) {
        super(props)
        this.name = props.name;
        this.maths = props.maths;
        this.science = props.science;
        this.english = props.english;
        this.history = props.history;
        this.geography = props.geography;
    }
    render() {
        return (<Div>
            <H1>Name {this.name}</H1>
            <P>Math: {this.maths}</P>
            <P>Science: {this.science}</P>
            <P>English: {this.english}</P>
            <P>History: {this.history}</P>
            <P>Geography: {this.geography}</P>
        </Div>)
    }
}
export default function Division() {
    return (<Article>
        <Student name="Priya" maths="85" science="90" english="78" history="82" geography="88" class="container" />
        <Student name="Rahul" maths="80" science="80" english="78" history="82" geography="88" class="container" />
        <Student name="Soniya" maths="75" science="70" english="78" history="82" geography="88" class="container" />
        <Student name="Robert" maths="65" science="60" english="78" history="82" geography="88" class="container" />
    </Article>);
}