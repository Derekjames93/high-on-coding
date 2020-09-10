const mainTitle = document.createElement('h2')
const secondTitle = document.createElement('h2')
const navBar = document.createElement('h4')
const div1 = document.createElement('div')
const div2 = document.createElement('div')
const div3 = document.createElement('div')
const div4 = document.createElement('div')
const div5 = document.createElement('div')
const home = document.createElement('h3')
const categories = document.createElement('h3')
const p1 = document.createElement('p')
const p2 = document.createElement('p')
const watch = document.createElement('h4')
const comments1 = document.createElement('h3')


comments1.textContent = '12 comments'
comments1.style.color = 'white'
comments1.style.
home.textContent = 'Home'
home.style.paddingLeft = '50px'
watch.textContent = ' Hello WatchKit'
watch.style.color = 'royalblue'
categories.textContent = 'Categories'
categories.style.paddingLeft = '50px'
mainTitle.textContent = 'HighOnCoding'
mainTitle.style.paddingLeft = '20px'
secondTitle.textContent = 'Curse of the Current Reviews'
p1.textContent = 'When you want to buy an application from the apple iTunes store you have more choices than you can handle.Most of the users scroll past the application description completely avoiding it like ads displayed on the right column of your webpage. Their choice is dependent on three important factors price,screenshot and reviews.'
p2.textContent = 'Last month Apple released the anticipated WatchKit Framework for developers in the form of iOS 8.2 beta SDK release. The WatchKit framework enable the developers to create Apple Watch applications. In this article we are going to focus on the basics of getting started with the WatchKit framework and developing apps for the Apple Watch'
p2.style.fontSize = '10px'
div1.style.display = 'flex'
div1.style.alignItems = 'center'
div1.style.color = 'white'
div1.style.backgroundColor = 'royalblue'
div1.style.height = '100px'
div1.style.justifyContent = 'flex-start'
div2.style.backgroundColor = 'gray'
div2.style.height = '150px'
div2.style.marginLeft = '50px'
div2.style.marginRight = '50px'
div3.style.marginLeft = '50px'
div3.style.marginRight = '50px'
div4.style.backgroundColor = '#f39018'
div4.style.height = '20px'
div4.style.marginLeft = '50px'
div4.style.marginRight = '50px'




const container = document.querySelector('#container')
container.appendChild(div1)
container.appendChild(div2)
container.append(div3)
container.appendChild(div4)

div1.appendChild(mainTitle)
div1.appendChild(home)
div1.appendChild(categories)
div2.appendChild(secondTitle)
div2.appendChild(p1)
div3.appendChild(watch)
div3.appendChild(p2)
div4.appendChild(comments1)