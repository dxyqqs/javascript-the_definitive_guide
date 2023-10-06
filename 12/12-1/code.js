function gap(comments) {
  console.log(`====== ${comments} ========`)
}

// for/of的复杂形式
gap('for/of的复杂形式')
const a = [1, 2, 3]
const aIterator = a[Symbol.iterator]()
for (let result = aIterator.next(); !result.done; result = aIterator.next()) {
  console.log(result.value)
}

// 迭代器对象本身也是一个可迭代对象
gap('迭代器对象本身也是一个可迭代对象')
const b = [1, 2, 3]
const bIterator = a[Symbol.iterator]()
bIterator.next()
console.log(...bIterator)

// 实现一个可迭代对象
gap('实现一个可迭代对象')

class Range {
  constructor(from, to) {
    this.from = from
    this.to = to
  }
  // 可迭代对象
  [Symbol.iterator]() {
    let { from, to } = this
    // 迭代器对象
    return {
      next() {
        //迭代结果对象
        const value = from++
        const done = value > to
        return done ? { done } : { value }
      },
      [Symbol.iterator]() {
        // 按惯例需要让迭代器本身也可迭代，
        return this
      }
    }
  }
}

console.log(... new Range(1, 5))

const range = new Range(1, 5)
const rangeIterator = range[Symbol.iterator]()
rangeIterator.next()
console.log(...rangeIterator)

// 