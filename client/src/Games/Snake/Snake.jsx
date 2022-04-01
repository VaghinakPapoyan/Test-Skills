import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components';
import Button from '../Game_Components/Button';
import Restart from '../Game_Components/Restart';
import Scores from '../Game_Components/Scores';
import Title from '../Game_Components/Title';
import { SnakeGame, createCanvas } from './snakeScript.js'


const StyledSnakeGame = styled.div`
	line-height: 1;
	display: flex;
	justify-content: space-between;
	font-size: 18px;
	font-weight: 600;
	align-items: center;
	margin-bottom: 10px;
`
const SnakeContainer = styled.div`
	position: relative;
	left: 50%;
	transform: translateX(-50%);
	display: inline-block;
`
const Canvas = styled.div` 
	position: relative;
	overflow: hidden;
`

export default function Snake() {

	const element = useRef();
	const [snake, setSnake] = useState()
	snake?.start();

	useEffect(() => 
	{
		setSnake(new SnakeGame(20, 20, 200, "#F6C90E"));
		createCanvas(500, 500, "#303841", element);
	}, [])

	useEffect(() => 
	{
		console.log(snake);
		snake?.start();
	}, [snake])

  	return (
		<SnakeContainer>
			<Title>Snake Game</Title>
			<StyledSnakeGame>
				<Scores id="score">Your Score: 0</Scores>
				<Button>Settings</Button>
			</StyledSnakeGame>
			<Canvas ref={element}>
				<Restart onClick={() => { snake.restart(); setSnake(new SnakeGame(20, 20, 200, "#F6C90E")) }}>Restart</Restart>
			</Canvas>
		</SnakeContainer>
  	)
}
