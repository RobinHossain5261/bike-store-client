import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className='max-w-4xl p-5 rounded-xl shadow-md mx-auto mt-5 border border-gray-200'>
                <h3 className='text-2xl'><strong>Question-1 :</strong>What are the different ways to manage a state in a React application?</h3>
                <p><strong>Answer :</strong>Not only are there are a lot of different kinds of state, but there often dozens of ways of managing each kind.In this guide, we will uncover the several kinds of state in your React apps that you might not be aware of, plus how to manage them in the most effective way.The Four Kinds of React State to Manage
                    Local state. Global state. Server state. URL state.</p>
            </div>
            <div className='max-w-4xl p-5 rounded-xl shadow-md mx-auto mt-5 border border-gray-200'>
                <h3 className='text-2xl'><strong>Question-2 :</strong>How does prototypical inheritance work?</h3>
                <p><strong>Answer :</strong>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.</p>
            </div>
            <div className='max-w-4xl p-5 rounded-xl shadow-md mx-auto mt-5 border border-gray-200'>
                <h3 className='text-2xl'><strong>Question-3 :</strong> What is a unit test? Why should we write unit tests?</h3>
                <p><strong>Answer :</strong>A unit test is a way of testing a unit - the smallest piece of code that can be logically isolated in a system. In most programming languages, that is a function, a subroutine, a method or property. The isolated part of the definition is important. <br />Well-written unit tests act as documentation for your code. Any developer can quickly look at your tests and know the purpose of your functions. It simplifies the debugging process. Unit testing is an integral part of extreme programming.</p>
            </div>
            <div className='max-w-4xl p-5 rounded-xl shadow-md mx-auto mt-5 border border-gray-200'>
                <h3 className='text-2xl'><strong>Question-4 :</strong> React vs. Angular vs. Vue?</h3>
                <p><strong>Answer :</strong> According to a survey by Stack Overflow 40.13% of the developers believe that React is the most commonly used JavaScript Framework. Angular and Vue follow it with 22.96% and 18.97%, respectively. <br />Vue provides higher customizability and hence is easier to learn than Angular or React. Further, Vue has an overlap with Angular and React with respect to their functionality like the use of components. Hence, the transition to Vue from either of the two is an easy option.</p>
            </div>

        </div>
    );
};

export default Blog;