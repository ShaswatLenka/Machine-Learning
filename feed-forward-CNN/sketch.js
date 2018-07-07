//documentation: https://js.tensorflow.org/api/0.12.0/#layers.dense

//defines the model
const model = tf.sequential();

//config options for the hidden layer
const configHidden = {
    units: 4,
    activation : 'sigmoid',
    inputDim : 2
}

//config options for output layer
const configOutput = {
    units: 3,
    activation : 'sigmoid'
}

//config options for compiling the model
const config = {
    optimizer : 'sgd',
    loss : 'meanSquaredError'
}


//hidden layer which is dense, i.e. fully connected to input layer
const hidden = tf.layers.dense(configHidden);


//output layer which is dense, i.e. fully connected to hidden layer
const output = tf.layers.dense(configOutput);



//add the layers to the model
model.add(hidden);
model.add(output);
model.compile(config);
 