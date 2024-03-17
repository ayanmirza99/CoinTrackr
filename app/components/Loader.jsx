import React from 'react'
import { TailSpin } from 'react-loader-spinner'

const Loader = () => {
  return (
    <div className="w-full min-h-[92vh] md:min-h-[88vh] flex justify-center items-center">
      <TailSpin
        visible={true}
        height="100"
        width="100"
        color="#ca8a04"
        ariaLabel="tail-spin-loading"
        radius="0"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  )
}

export default Loader