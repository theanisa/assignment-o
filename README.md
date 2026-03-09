# React Basics – README

## ১. JSX কী এবং এটি কেন ব্যবহার করা হয়?

JSX (JavaScript XML) হলো JavaScript-এর একটি syntax extension যা React-এ ব্যবহার করা হয়। এটি ব্যবহার করে JavaScript কোডের ভিতরে HTML-এর মতো structure লেখা যায়। এর ফলে user interface তৈরি করা আরও সহজ এবং readable হয়। JSX ব্যবহার করলে UI এর structure পরিষ্কারভাবে বোঝা যায় এবং React পরে এটিকে সাধারণ JavaScript-এ convert করে যাতে browser এটি বুঝতে পারে।

---

## ২. State এবং Props এর মধ্যে পার্থক্য কী?

State এবং Props দুটোই React-এ data পরিচালনার জন্য ব্যবহার হয়, কিন্তু তাদের কাজ আলাদা।

* **State** হলো এমন data যা একটি component এর ভিতরে থাকে এবং সময়ের সাথে পরিবর্তন হতে পারে। এটি component নিজেই নিয়ন্ত্রণ করে এবং সাধারণত dynamic information পরিচালনার জন্য ব্যবহার করা হয়।

* **Props (Properties)** ব্যবহার করা হয় parent component থেকে child component-এ data পাঠানোর জন্য। Props read-only হয়, অর্থাৎ যে component props পায় সে এটি পরিবর্তন করতে পারে না।

সহজভাবে বললে, **State component এর ভিতরে পরিচালিত হয়**, আর **Props parent component থেকে child component-এ data পাঠাতে ব্যবহৃত হয়।**

---

## ৩. useState hook কী এবং এটি কীভাবে কাজ করে?

`useState` হলো React-এর একটি built-in hook যা functional component-এ state ব্যবহারের সুযোগ দেয়। আগে শুধুমাত্র class component-এ state ব্যবহার করা যেত, কিন্তু hook আসার পর functional component-এও state manage করা সম্ভব হয়েছে।

`useState` ব্যবহার করে component এর ভিতরে data সংরক্ষণ করা যায় এবং সেই data পরিবর্তন করা যায়। যখন state পরিবর্তন হয়, React স্বয়ংক্রিয়ভাবে component-টি পুনরায় render করে যাতে user interface নতুন data অনুযায়ী update হয়।

---

## ৪. React-এ component গুলোর মধ্যে state কীভাবে share করা যায়?

React-এ একাধিক component এর মধ্যে state share করার একটি সাধারণ পদ্ধতি হলো **Lifting State Up**। এর অর্থ হলো shared state-টিকে এমন একটি parent component-এ রাখা, যেটি সেই state ব্যবহার করা সব child component এর common parent। এরপর সেই state props এর মাধ্যমে child component গুলোতে পাঠানো হয়। এর ফলে একাধিক component একই data ব্যবহার করতে পারে এবং data management সহজ হয়।

---

## ৫. React-এ event handling কীভাবে করা হয়?

React-এ event handling ব্যবহার করা হয় user interaction যেমন button click, input typing বা form submit এর মতো কাজ পরিচালনা করার জন্য। React-এ event গুলো handle করার জন্য function ব্যবহার করা হয়। যখন কোনো event ঘটে, তখন নির্দিষ্ট function execute হয় এবং সেই অনুযায়ী component এর behavior পরিবর্তন হয়। Event এর নাম React-এ সাধারণত camelCase format-এ লেখা হয় এবং এটি user interaction অনুযায়ী UI কে responsive করে তোলে।
