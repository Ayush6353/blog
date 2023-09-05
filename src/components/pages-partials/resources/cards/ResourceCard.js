import { blogUrl } from '../../../../utils/blog'
import ArrowUpRight from '../../../../components/svgs/arrow-up-right'
import React, { useEffect, useState } from 'react'
import moment from 'moment'
import styles from '../index.module.css'
import { useNavigate, Link } from 'react-router-dom'

const Card = ({ data }) => {
  const [cardData, setCardData] = useState([])
  console.log('🚀 ~ file: ResourceCard.js:10 ~ Card ~ cardData:', cardData)
  const router = useNavigate()
  const isFirefox = typeof InstallTrigger !== 'undefined'

  useEffect(() => {
    setCardData([
      'https://i.pcmag.com/imagery/articles/03a3gbCKfH8dDJnjhHLuHDf-1..v1665523315.png',
      'https://images.nightcafe.studio//assets/tdraw-girl.jpg?tr=w-1200,c-at_max',
      'https://images.rapidload-cdn.io/spai/ret_img,q_lossless,to_avif,w_18/https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_1024,h_1024/https://www.zmo.ai/wp-content/uploads/2023/01/Splash-ink.webp',
      'https://imageio.forbes.com/specials-images/imageserve/648aaa9fac6d92c810b12f50/Why-Companies-Are-Vastly-Underprepared-For-The-Risks-Posed-By-AI/960x0.jpg?height=406&width=711&fit=bounds',
      'https://ychef.files.bbci.co.uk/1280x720/p0ff8hmx.jpg',
      'https://cdn.siasat.com/wp-content/uploads/2023/05/RK-AI.jpg',
      "https://imgv3.fotor.com/images/videoImage/wonderland-girl-generated-by-Fotor-ai-art-generator_2023-05-15-104543_ibow.jpg",
      "https://www.jeffbullas.com/wp-content/uploads/2023/04/AI-portrait-generator.jpg",
      "https://c02.purpledshub.com/uploads/sites/41/2023/02/Midjourney-L-2068f65.jpg",
    ])
  },[])

  return (
    <>
      {cardData.map((CardData) => (
        <div className="fontInter w-full px-2 mt-7 mx-auto">
          <div className="rounded-lg relative w-full h-[280px]">
            <Link>
              <img
                src={CardData}
                className="rounded-lg w-full h-full cursor-pointer object-cover"
              />
            </Link>
            <div
              className={`${styles.backdrop} ${
                isFirefox ? styles.firefoxBackdrop : styles.googleBackdrop
              } absolute bottom-0 w-full rounded-b-lg`}
            >
              <div className="flex justify-between w-full h-[58px] items-center">
                <div className="ml-6">
                  <p className="text-white">
                    {moment(data?.publishedAt).format('D MMM YYYY')}
                  </p>
                </div>
                <p className="text-white mr-6">Mira</p>
              </div>
            </div>
          </div>
          <Link href={`/blog/${data?.slug}`}>
            <p className="text-white text-[24px] leading-8 mt-5">
              Matheran – All You Need To Know Before Your Visit
            </p>
          </Link>

          <p className="text-gray-400 text-[16px] leading-6 mt-3">
            {data?.description}
          </p>
          <Link href={`/blog/${data?.slug}`}>
            <p
              onClick={() => router(`/blog/${data?.slug}`)}
              className="text-indigo-500 text-[16px] leading-6 mt-5 flex gap-3 items-center cursor-pointer md:justify-start justify-center"
            >
              Read post <ArrowUpRight stroke="#6938EF" />
            </p>
          </Link>
        </div>
      ))}
    </>
  )
}

export default Card

{
  /* <div className="fontInter w-full px-2 mt-7 mx-auto">
<div className="rounded-lg relative w-full h-[280px]">
  {console.log('data?.coverImage', data.coverImage.slice(0, 5))}
  <Link href={`/blog/${data?.slug}`}>
    <img
      src={`${
        data?.coverImage
          ? data.coverImage.slice(0, 5) == 'https'
            ? data?.coverImage
            : `${blogUrl}/`.concat(data?.coverImage)
          : 'https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Ferikkain%2Ffiles%2F2018%2F01%2FRey-Luke.jpg'
      }`}
      className="rounded-lg w-full h-full cursor-pointer object-cover"
    />
  </Link>
  <div
    className={`${styles.backdrop} ${
      isFirefox ? styles.firefoxBackdrop : styles.googleBackdrop
    } absolute bottom-0 w-full rounded-b-lg`}
  >
    <div className="flex justify-between w-full h-[58px] items-center">
      <div className="ml-6">
        <p className="text-white">
          {moment(data?.publishedAt).format('D MMM YYYY')}
        </p>
      </div>
      <p className="text-white mr-6">{data?.author}</p>
    </div>
  </div>
</div>
<Link href={`/blog/${data?.slug}`}>
  <p className="text-white text-[24px] leading-8 mt-5">{data?.title}</p>
</Link>

<p className="text-gray-400 text-[16px] leading-6 mt-3">
  {data?.description}
</p>
<Link href={`/blog/${data?.slug}`}>
  <p
    onClick={() => router.push(`/blog/${data?.slug}`)}
    className="text-indigo-500 text-[16px] leading-6 mt-5 flex gap-3 items-center cursor-pointer md:justify-start justify-center"
  >
    Read post <ArrowUpRight stroke="#6938EF" />
  </p>
</Link>
</div> */
}
