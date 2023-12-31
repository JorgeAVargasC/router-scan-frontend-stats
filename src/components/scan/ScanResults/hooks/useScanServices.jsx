import { allScansState, scanLoadingState } from '@/contexts'

import { useRecoilState } from 'recoil'

// import { convertDate } from '@/utils'

import { serviceFindMultipleDocuments } from '@/services'

export const useScanServices = () => {
  const [, setAllScans] = useRecoilState(allScansState)
  const [, setScanLoading] = useRecoilState(scanLoadingState)

  // const getScan = () => {
  //   setScanLoading(true)
  //   serviceGetScan()
  //     .then((data) => {
  //       const preparedData = {
  //         ...data,
  //         vulnerabilities: data.vulnerabilities
  //           .map((vuln) => ({
  //             ...vuln,
  //             modified: convertDate(vuln?.modified, 'DD/MM/YYYY'),
  //             published: convertDate(vuln?.published, 'DD/MM/YYYY'),
  //           }))
  //           .sort((a, b) => b.cvss - a.cvss),
  //       }
  //       setScan(preparedData)
  //     })
  //     .catch((error) => {
  //       console.log(error)
  //     })
  //     .finally(() => {
  //       setScanLoading(false)
  //     })
  // }

  const getAllScans = () => {
    setScanLoading(true)
    serviceFindMultipleDocuments()
      .then((data) => {
        setAllScans(data)
      })
      .catch((error) => {
        console.log(error)
      })
      .finally(() => {
        setScanLoading(false)
      })
  }

  return {
    getAllScans,
  }
}
