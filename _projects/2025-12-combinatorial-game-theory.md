---
sort_date: 2025-12-01
kind: exposition
title: Combinatorial game theory
venue: "Math 101: Sets, Groups and Real Analysis, Fall 2025"
authors: "With Cécile Chen and Rayane Jibre"
summary: An exposition of Zermelo's theorem and the Sprague–Grundy theorem, which reduces every finite impartial game to a single Nim heap.
tags: [game theory, proofs, Nim]
links:
  - label: Paper (PDF)
    url: /assets/projects/combinatorial-game-theory.pdf
media:
  type: image
  src: /assets/projects/combinatorial-game-theory.png
  alt: First page of the paper
---

Starting from a 21-token subtraction game, the paper builds the vocabulary of combinatorial game theory (positions, options, impartial and partizan games, N- and P-positions) and proves two main results.

- **Zermelo's theorem:** a finite two-player game of perfect information is determined, by strong induction on the size of the game tree.
- **Sprague–Grundy theorem:** every position in a finite impartial normal-play game is equivalent to a Nim heap, with its value given by the MEX of its options' values.

I wrote the Sprague–Grundy section (disjunctive sums, MEX, game equivalence, and the proof) and part of the terminology section.
