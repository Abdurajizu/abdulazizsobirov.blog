---
sort_date: 2026-05-01
venue: "Accepted at the Society for Neuroscience (SfN), October 2026"
title: Predator risk and network sparsity improve social foraging in reinforcement learning models
semester: Summer 2026
term_note: "During my summer as a KRANIUM fellow at the Kempner Institute."
lab: "Rajan Lab"
lab_url: "https://www.rajanlab.com/"
lab_pi: "Kanaka Rajan"
lab_mentors: "Multi-agent RL (MARL) team, under postdocs Ryan Badman and Riley Simmons-Edler"
lab_part: "Kempner Institute"
summary: Interpretable deep RL-RNN agents in ForageWorld, a large, partially observable foraging task, extended to groups of foragers.
tags: [multi-agent RL, JAX, computational neuroscience, SLURM]
---

We extend ForageWorld, a task with large partially observable arenas, depleting food patches, homeostatic survival and mobile predators, into social multi-agent settings. Each agent has its own separately learned DRL-RNN policy, and no exploration or social terms are added to the RL objective. Groups of 6 agents forage in procedurally generated 96x96 arenas.

- Standard RL is enough for sophisticated, animal-like exploration in groups, but only when predators are challenging enough. Too few predators give too little risk pressure and too many make the task too hard (10, 15 and 20 predators tested; 15 is best), consistent with rodent studies.
- Networks with 90% of weights zeroed outperform fully connected ones in social conditions, suggesting a sparsity advantage in naturalistic tasks.
- Built the JAX training stack and ran large experiments on a GPU cluster via SLURM, including memory optimization and checkpointing.
- Tuned reward functions and design choices for multi-agent collaboration, improving agent performance by 10%+.
