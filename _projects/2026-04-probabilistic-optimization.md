---
sort_date: 2026-04-01
kind: exposition
title: Probabilistic view of optimization algorithms for training machine learning models
venue: "Math 154: Probability Theory, Spring 2026"
authors: "Solo-authored"
summary: Why do loss minimization and gradient descent work? A proof-based account using the Strong Law of Large Numbers and the Central Limit Theorem.
tags: [probability, machine learning, optimization]
links:
  - label: Paper (PDF)
    url: /assets/projects/probabilistic-view-of-optimization.pdf
media:
  type: image
  src: /assets/projects/probabilistic-view-of-optimization.png
  alt: First page of the paper
---

Most sources say the Law of Large Numbers and the Central Limit Theorem justify how models are trained, but rarely show a proof. This paper formalizes the link.

- Sets up models, loss functions, true versus empirical loss, and vanilla gradient descent.
- Uses the **Strong Law of Large Numbers** to show the empirical loss converges almost everywhere to the true loss, which justifies empirical risk minimization.
- Uses the **Central Limit Theorem** to show each component of the mini-batch gradient is approximately Normal around the true gradient with variance σ²/B, which justifies mini-batch gradient descent.
