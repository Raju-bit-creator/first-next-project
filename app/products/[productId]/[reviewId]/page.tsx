interface ReviewDetailProps{
    params : {
        reviewId: string
    }
}

export default function ReviewDetail({params}:ReviewDetailProps) {
     const {reviewId} = params

     return(
        <div>
            <h4>review {reviewId} for product</h4>
        </div>
     )
}

// import { useRouter } from "next/router";
// function Review() {
//     const router= useRouter()
//     const {reviewId , productId}= router.query

//     return(
//         <div>
//             <h4>review {reviewId} for product {productId}</h4>
//         </div>
//     )

// }
// export default Review