import axios from "axios";
import { NextResponse } from "next/server";

export async function GET(req) {
    try {
        const response = await axios(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.TMDB_API_KEY}&language=ja-JP`);
        console.log('取得データ: ',response.data);
        return NextResponse.json(response.data, {status: 200});
    } catch (err) {
        console.log(err);
    }
}