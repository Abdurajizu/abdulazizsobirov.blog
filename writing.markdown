---
layout: page
title: Writing
permalink: /writing/
---

<!-- Posts are listed automatically from _posts/. -->

{% assign posts = site.posts | where_exp: "p", "p.slug != 'welcome-to-jekyll'" %}
{% if posts.size > 0 %}
<ul class="post-list">
  {% for post in posts %}
  <li>
    <span class="post-meta">{{ post.date | date: "%Y-%m-%d" }}</span>
    <h3><a class="post-link" href="{{ post.url | relative_url }}">{{ post.title | escape }}</a></h3>
    {% if post.excerpt %}{{ post.excerpt }}{% endif %}
  </li>
  {% endfor %}
</ul>
{% else %}
<p>Will upload soon.</p>
{% endif %}
