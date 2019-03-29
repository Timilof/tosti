const path = require('path');
const bodyParser = require('body-parser');
const {
  breadFetch,
  cheeseFetch,
  topsFetch,
  getUnique,
  clickedBooks
} = require('../helpers/helper')


exports.index = async (req, res) => {
  let value = await breadFetch()
  let breads = await getUnique(value.amount, value.val)
  let ches = await cheeseFetch()
  let chies = await getUnique(ches.amount, ches.val)
  let top = await topsFetch()
  let toops = await getUnique(top.amount, top.val)
  res.render('index', {breads: breads, chies: chies, toops:toops});
}

exports.about = (req, res) => {
  res.render('about');
}

exports.handleRequest = async (req, res) => {
  // console.log('inside handle request', req.body);
  let value = await breadFetch()
  let final = await getUnique(20, value.val)
  let cBooks = await clickedBooks(req.body);
  console.log(cBooks, 'coming from handle request');
  res.render('detail', { cBooks: cBooks});
  // logic schrijven die praat met helper function en dingen doet met de data || opnieuw request, met de req.body
}

exports.notFound = (req, res) => {
  res.render('notFound');
}
