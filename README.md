# React useEffect Hook Memory Leak

This repository demonstrates a common error in React applications: a memory leak caused by a missing return statement in the `useEffect` hook.

The `bug.js` file contains the buggy code, while `bugSolution.js` provides the corrected version.

## Bug Description

A memory leak occurs when a component unmounts, but the effect it created continues to run, possibly accessing stale closures or causing unwanted side effects. In this case, the `useEffect` hook updates the document title on every state change. Without a return statement that cleans up the effect, this will persist after the component is no longer needed, potentially leading to performance issues or unexpected behavior.

## Solution

The solution involves adding a cleanup function to the `useEffect` hook. This function will be executed when the component unmounts or when the dependencies change, ensuring that the effect's side effects are properly cleaned up.