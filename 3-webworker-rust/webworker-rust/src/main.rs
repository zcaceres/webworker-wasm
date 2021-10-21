use rand::prelude::*;

fn generate_vec(len: usize) -> Vec<f64> {
    let mut rng = rand::thread_rng();
    let mut vec = Vec::with_capacity(len);
    for _ in 0..len {
        vec.push(rng.gen::<f64>() * 100.);
    }
    return vec;
}

fn generate_and_sort() {
    const NUM_NUMS: usize = 1000000;
    // We use a f64 vec and call rng.gen() on every iteration to mimic the Math.random() calls in JS as closely as possible
    // There are more efficient ways to do this operation, but it seemed like an unfair comparison.
    let mut nums = generate_vec(NUM_NUMS);
    println!("sorting");
    nums.sort_by(|a, b| a.partial_cmp(b).unwrap());
    println!("done");
}


fn main() {
    generate_and_sort();
}
