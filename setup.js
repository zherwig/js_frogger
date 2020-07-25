const canvas = document.getElementById('canvas1');
const ctx1 = canvas.getContext('2d');
canvas.width = 600;
canvas.height = 600;

const canvas2 = document.getElementById('canvas2');
const ctx2 = canvas.getContext('2d');
canvas.width = 600;
canvas.height = 600;


const canvas3 = document.getElementById('canvas3');
const ctx3 = canvas.getContext('2d');
canvas.width = 600;
canvas.height = 600;


const canvas4 = document.getElementById('canvas4');
const ctx4 = canvas.getContext('2d');
canvas.width = 600;
canvas.height = 600;


const canvas5 = document.getElementById('canvas5');
const ctx5 = canvas.getContext('2d');
canvas.width = 600;
canvas.height = 600;

// Global variables
const grid = 80;
let keys = []; //keyboard keys
let score = 0;
let collisionCount = 0;
let frame = 0;
let gamespeed = 1;

const particlesArray = []; //all dust particles
const maxParticles = 300;
const ripplesArray = [];
const carsArray = [];
const logsArray = []; //river items