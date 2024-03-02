import pb from "./config";

export const getReviewByProductId = async (productId) => {
    const records = await pb.collection('reviews').getList(1, 50, {
        filter: 'product_id = ' + productId,
    });

    const reviews = records.map(review => ({
        id: review.id,
        created: review.created,
        productId: review.product_id,
        userId: review.user_id,
        title: review.title,
        description: review.description,
        stars: review.stars
    }))

    const reviewsLength = reviews.length
    const averageStar = reviews.reduce((review, currentValue) => review.stars / reviewsLength + currentValue, 0);

    return {
        reviews,
        averageStar
    }
}

export const addReview = async(review) => {
    const record = await pb.collection('reviews').create(review);

    return record;
}