---
title: "Hooks Revisited"
publishDate: "2020-02-16"
layout: "../../layouts/BlogPost.astro"
description: "This series is a holistic look at React's hooks API and how they each work."
category: "react"
featured: true
tags:
  - "hooks"
---

> Hooks are functions that let you “hook into” React state and lifecycle features from function components [[React docs]](https://reactjs.org/docs/hooks-overview.html#but-what-is-a-hook)

Introduced in <a href="https://github.com/facebook/react/blob/master/CHANGELOG.md#1680-february-6-2019" target="_blank">React v16.8</a>, the hooks API represents a change in how developers compose their components. Intended to compartmentalize blocks of functionality, they make reusing code across your application easier. They also mark a shift away from using `class` components and the use of lifecycle methods.

When hooks were first introduced at [React Conf 2018](https://www.youtube.com/playlist?list=PLPxbbTqCLbGE5AihOSExAa4wUM-P42EIJ), the React team explained the motivations behind them. Essentially, they wanted to solve the many problems all at once:

1. It can be hard to re-use logic between components
2. Complex component files are huge
3. Understanding classes in JavaScript can be difficult to understand (for humans and compilers)

For a **much** more detailed explanation about the origin of hooks, make sure to check out the team's full talk featuring [Dan Abramov](https://overreacted.io/), [Sophie Alpert](https://sophiebits.com/) and [Ryan Florence](https://reacttraining.com/).

<iframe
  width="560"
  height="315"
  src="https://www.youtube.com/embed/dpw9EHDh2bM"
  frameborder="0"
  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen
></iframe>

### Goals

When the hooks API moved out of beta, my team started using them almost immediately. However, most of the logic for the feature I was working on at the time was contained within class components still using lifecycle methods. When creating new components, I was using function components and hooks; however, the components usually weren't complex enough to leverage more than useState or useEffect.

Currently, I work in a codebase that was all written after developers started shifting to hooks and I want to revisit (hence the title of this series) how they **all** work, as well as when to use them.

To do that, I am writing an article about each standard React hook. Each piece is linked below and will cover the hook in depth, including code samples illustrating how it works.

### Table of Contents

1. <a href="/posts/hooks-usestate">useState</a>
2. <a href="/posts/hooks-useeffect">useEffect</a>
3. <a href="/posts/hooks-uselayouteffect">useLayoutEffect</a>
4. <a href="/posts/hooks-useref">useRef</a>
5. <a href="/posts/hooks-usecontext">useContext</a>
6. <a href="/posts/hooks-usememo">useMemo</a>
7. <a href="/posts/hooks-usecallback">useCallback</a>
8. <a href="/posts/hooks-usereducer">useReducer</a>
9. <a href="/posts/hooks-usedebugvalue">useDebugValue</a>
10. useImperativeHandle
11. Custom hooks
