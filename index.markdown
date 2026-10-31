---
layout: page
title: Home
---

{%- assign latest_research = site.research | sort: "sort_date" | reverse | first -%}
{%- assign latest_project = site.projects | sort: "sort_date" | reverse | first -%}
{%- assign latest_post = site.posts | where_exp: "p", "p.slug != 'welcome-to-jekyll'" | first -%}

<section class="hero">
  <img class="hero-photo" src="{{ '/assets/img/profile.jpg' | relative_url }}" alt="Photo of Abdulaziz Sobirov" width="240" height="248">
  <div class="hero-text">
    <h1 class="hero-name">Abdulaziz Sobirov</h1>
    <p class="hero-sub">Harvard College &middot; Class of 2028</p>
    <p class="hero-summary">I'm a Mathematics student at Harvard College interested in Machine Learning, AI interpretability and safety, as well as a researcher currently working on foraging in multi-agent reinforcement learning (MARL).</p>
    <div class="hero-links">
      {% include social.html %}
      <a class="hero-mail" href="mailto:{{ site.email }}">{{ site.email }}</a>
    </div>
  </div>
</section>

<section class="home-section">
  <ul class="home-links">
    <li>
      <a class="home-link" href="{{ '/research/' | relative_url }}">Research</a>
      <p>Multi-agent reinforcement learning, world models, diffusion and generative models.</p>
      {%- if latest_research %}
      <p class="home-latest"><span>Latest</span> {{ latest_research.title }}</p>
      {%- endif %}
    </li>
    <li>
      <a class="home-link" href="{{ '/projects/' | relative_url }}">Projects</a>
      <p>Machine learning and robotics projects, and exposition papers on probability, game theory and quantum information.</p>
      {%- if latest_project %}
      <p class="home-latest"><span>Latest</span> {{ latest_project.title }}</p>
      {%- endif %}
    </li>
    <li>
      <a class="home-link" href="{{ '/writing/' | relative_url }}">Writing</a>
      <p>Some of my thoughts.</p>
      {%- if latest_post %}
      <p class="home-latest"><span>Latest</span> <a href="{{ latest_post.url | relative_url }}">{{ latest_post.title | escape }}</a></p>
      {%- endif %}
    </li>
  </ul>
</section>

<section class="home-section">
  <h2 class="home-heading">Updates</h2>
  <ul class="updates">
    <li><span class="updates-date">Oct 2026</span><span>Launched this website.</span></li>
    <li><span class="updates-date">Fall 2026</span><span>Technical Fellow at the <a href="https://aisafetyteam.org/" target="_blank" rel="noopener noreferrer">AI Safety Team</a>.</span></li>
    <li><span class="updates-date">Sep 2026</span><span>Became a Course Assistant for Math 101: Sets, Groups and Real Analysis.</span></li>
    <li><span class="updates-date">Summer 2026</span><span>KRANIUM Fellow at the Kempner Institute, Harvard.</span></li>
    <li><span class="updates-date">Spring 2026</span><span>Joined the <a href="https://www.rajanlab.com/" target="_blank" rel="noopener noreferrer">Rajan Lab</a>.</span></li>
  </ul>
</section>
