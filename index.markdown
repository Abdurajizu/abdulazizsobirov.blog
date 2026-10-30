---
layout: page
title: Home
---

<!-- Intro goes here: a few sentences about who you are and what you work on. -->

Placeholder intro.

## Recent writing

{% if site.posts.size > 0 %}
<ul class="post-list">
  {% for post in site.posts limit: 3 %}
  <li>
    <span class="post-meta">{{ post.date | date: "%Y-%m-%d" }}</span>
    <h3><a class="post-link" href="{{ post.url | relative_url }}">{{ post.title | escape }}</a></h3>
  </li>
  {% endfor %}
</ul>

[All writing]({{ "/writing/" | relative_url }})
{% else %}
Nothing published yet.
{% endif %}
