const { test, expect } = require('@jest/globals')
const { normalizeURL } = require('./crawl.js')
const { getURLsFromHTML } = require('./crawl.js')

const norm = normalizeURL
const getURL = getURLsFromHTML

test('URL https with final /', () => {
  expect(norm("https://blog.boot.dev/path/")).toBe('blog.boot.dev/path');
});

test('URL https without', () => {
  expect(norm("https://blog.boot.dev/path")).toBe('blog.boot.dev/path');
});

test('URL https with final /', () => {
  expect(norm("http://blog.boot.dev/path/")).toBe('blog.boot.dev/path');
});

test('URL https without', () => {
  expect(norm("http://blog.boot.dev/path")).toBe('blog.boot.dev/path');
});

test('URL take in HTML body 1 compleate', () => {
  expect(getURL('<a href="https://boot.dev/path">Learn Backend Development</a>', "https://boot.dev")).toStrictEqual(['https://boot.dev/path']);
});


