const bar = () => console.log('bar')

const baz = () => console.log('baz')

const foo = () => {
    console.log('foo')
    bar()
    baz()
}

foo()
    /**
     * foo
    bar
    baz
     */

const bar = () => console.log('bar')

const baz = () => console.log('baz')

const foo = () => {
    console.log('foo')
    setTimeout(bar, 0)
    baz()
}

foo()

/**
 * foo
baz
bar
 */

/**
  * When setTimeout() is called, the Browser or Node.js start the timer. Once the timer expires,
  *  in this case immediately as we put 0 as the timeout, the callback function is put in the Message Queue.

The Message Queue is also where user-initiated events like click or keyboard events,
 or fetch responses are queued before your code has the opportunity to react to them. Or also DOM events like onLoad.

The loop gives priority to the call stack, and it first processes everything it finds in the call stack,
 and once there’s nothing in there, it goes to pick up things in the message queue.

We don’t have to wait for functions like setTimeout, fetch or other things to do their own work, 
because they are provided by the browser, and they live on their own threads. For example,
 if you set the setTimeout timeout to 2 seconds, you don’t have to wait 2 seconds - the wait happens elsewhere.
  */

const bar = () => console.log('bar')

const baz = () => console.log('baz')

const foo = () => {
    console.log('foo')
    setTimeout(bar, 0)
    new Promise((resolve, reject) =>
        resolve('should be right after baz, before bar')
    ).then(resolve => console.log(resolve))
    baz()
}

foo()

/**
  * 
foo
baz
should be right after baz, before bar
bar
  */
/**
 ECMAScript 2015 introduced the concept of the Job Queue, which is used by Promises (also introduced in ES6/ES2015).
  It’s a way to execute the result of an async function as soon as possible, rather than being put at the end of the call stack.

Promises that resolve before the current function ends will be executed right after the current function.

I find nice the analogy of a rollercoaster ride at an amusement park: the message queue puts you at the back of the queue, 
behind all the other people, where you will have to wait for your turn,
 while the job queue is the fastpass ticket that lets you take another ride right after you finished the previous one.
 */