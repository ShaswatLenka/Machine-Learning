// dummy data for training
const xs = tf.tensor2d([[0.25,0.6],
                        [0.5,0.2],
                       [0.6,0.8]]);

const ys = tf.tensor2d([[0.44,0.56,0.7],
                       [0.99,0.85,0.55],
                       [0.03,0.88,0.77]]);


async function train(){   
//the history variable stores the history of the training and has some properties which specifies how the training is going on
for(let i = 0; i<100; i++){
let response = await model.fit(xs,ys);
    console.log(response.history.loss[0]);
}
}