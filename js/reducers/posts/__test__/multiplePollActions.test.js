import 'react-native';
import React from 'react';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import {getNewMultipleAnswers} from '../pollActions'


const specific = {
	my_answer:[1,2]
}
const answers = []


describe('Change multiple poll', () =>{

	it('change multiple poll - unselect item', () => {

	let index = 2;

	let answersAfter = [1];

	expect(getNewMultipleAnswers(answers, specific, index)).toEqual(answersAfter);
	});

	it('change multiple poll - select item', () => {

	  let index = 2;

	  let answersAfter = [1,2];

	  expect(getNewMultipleAnswers(answers, specific, index)).toEqual(answersAfter);
	});

	it('change multiple poll - select another item', () => {

	let index = 3;

	let answersAfter = [1,2,3];

	expect(getNewMultipleAnswers(answers, specific, index)).toEqual(answersAfter);
	});
	it('change multiple poll - unselect first item', () => {

	let index = 1;

	let answersAfter = [2,3];

	expect(getNewMultipleAnswers(answers, specific, index)).toEqual(answersAfter);
	});





});
