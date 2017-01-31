import 'react-native';
import React from 'react';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import {getNewSingleAnswer} from '../pollActions'


const specific = {
	my_answer:[1]
}
const answers = []


describe('Change single poll', () =>{

	it('change single poll - unselect item', () => {

	let index = 1;

	let answersAfter = [];

	expect(getNewSingleAnswer(answers, specific, index)).toEqual(answersAfter);
	});

	it('change single poll - select item', () => {

	  let index = 3;

	  let answersAfter = [3];

	  expect(getNewSingleAnswer(answers, specific, index)).toEqual(answersAfter);
	});


});
