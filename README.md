<h1>QuickFit</h1>

<h2>Installation</h2>
<p>
First, the repository will need to be cloned onto your machine. You'll need to install a git client to do so.
</p>
<p>
If you want a git client with a nice gui check out <a href="https://desktop.github.com/">GitHub Desktop</a>
</p>
<p>
If you want a command-line git client on Windows, check out <a href="https://gitforwindows.org/">Git BASH</a>. You can alternatively use Windows Subsytem for Linux.
</p>
<p>
If you're on Linux, git is probably pre-installed.
</p>

<hr/>

<h5>Setting up dev env</h5>

<ol>
<li>Install <a href="https://nodejs.org/en/">Node</a>.</li>
<li>Clone the repository using the following:</li>
```
git clone https://github.com/pitouteng/quickfit.git
```
<li>cd into the QuickFit folder and run the below to install the project's dependencies:</li>
```
npm install
```
</ol>

<h2>Development Process</h2>
<p>
Since we're using Firebase, there is no real need to create a Node based backend as we have previously discussed.
However, to ease the development process, we can still leverage Node and npm as a build-tool.
</p>
<p>
If you're interested, below are a few articles explaining the usage of npm as a build-tool 
</p>
[Article 1](https://scotch.io/tutorials/using-npm-as-a-build-tool#toc-getting-started)
<p></p>
[Article 2](https://medium.com/javascript-training/introduction-to-using-npm-as-a-build-tool-b41076f488b0)
<hr/>
<p>
All website files are located in the src folder.
</p>
<p>
Tests are located in the test folder (maybe we won't write any but its nice to have the option).
</p>
Running ```npm run dev``` will open the project in a web-browser tab automatically reloading whenever code is modified.