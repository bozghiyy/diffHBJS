    pbjs.addAdUnits([
        {
            code: 'biddingBox',
            sizes: [[300, 250]],
            bids: [
                {bidder: 'brealtime', params: { placementId: '9339523'}},   // CPXi - Diffen_Desktop_300x250_D Biddr
                //{bidder:"aol",params:{placement:"4221235",network:"10650.1",sizeId:"170",alias:"Diffen_Desktop_300x250_D"}}, // AOL Diffen_Desktop_300x250_D
                {bidder: 'defymedia', params: { placementId: '9354947'}},   // defymedia - Diffen_Desktop_300x250_D
                {bidder: 'sekindo', params: { spaceId: '71210'}}            // sekindo - Diffen_Desktop_300x250_D for 300x250
                ,{bidder:"rubicon",params:{accountId:"15808",siteId:"105762",zoneId:"517720",sizes:[15]}} // Rubicon Diffen_HB_Desktop_300x250
                ,{bidder:"sovrn",params:{tagid:"391561"}} // Sovrn 	Diffen_HB_Desktop_300x250
                ,{bidder: 'pulsepoint',params: {cf: '300X250',cp: 560645,ct: 516549}} // Pulsepoint 300x250
            ]
        },
//         {
//             code: 'biddingLead',
//             sizes: [[728, 90]],
//             bids: [
//                 {bidder: 'brealtime', params: { placementId: '9339521'}}, // CPXi - Diffen_Desktop_728x90_C Biddr
//                 //{bidder:"aol",params:{placement:"4221234",network:"10650.1",sizeId:"225",alias:"Diffen_Desktop_728x90_C"}}, // AOL Diffen_Desktop_728x90_C
//                 {bidder: 'defymedia', params: { placementId: '9354942'}}, // defymedia - Diffen_Desktop_728x90_C
//                 {bidder: 'sekindo', params: { spaceId: '71208'}}          // sekindo - Diffen_Desktop_728x90_C for 728x90
//                 ,{bidder:"rubicon",params:{accountId:"15808",siteId:"105762",zoneId:"517710",sizes:[2]}} // Rubicon Diffen_HB_Desktop_728x90_C
//                 ,{bidder:"sovrn",params:{tagid:"391560"}} // Sovrn Diffen_HB_Desktop_728x90
//                 ,{bidder: 'pulsepoint',params: {cf: '728X90',cp: 560645,ct: 516552}} // Pulsepoint 728x90
//             ]
//         },
        {
            code: 'biddingSky',
            sizes: [[160, 600]],
            bids: [
                {bidder: 'brealtime', params: { placementId: '9339524'}}, // CPXi - Diffen_Desktop_300x250_E Biddr  for 1600x600
                //{bidder:"aol",params:{placement:"4249162",network:"10650.1",sizeId:"170",alias:"Diffen_Desktop_160x600_D"}}, // AOL Diffen_Desktop_160x600_D
                {bidder: 'defymedia', params: { placementId: '9354949'}}, // defymedia - Diffen_Desktop_300x250_E for 1600x600
                {bidder: 'sekindo', params: { spaceId: '71217'}}          // sekindo - Diffen_Desktop_300x250_E for 160x600
                ,{bidder:"rubicon",params:{accountId:"15808",siteId:"105762",zoneId:"517716",sizes:[9]}} // Rubicon Diffen_HB_Desktop_160x600
                , {bidder:"sovrn",params:{tagid:"391563"}} // Sovrn Diffen_HB_Desktop_160x600
                ,{bidder: 'pulsepoint',params: {cf: '160X600',cp: 560645,ct: 516553}} // pulsepoint 160x600
            ]
        },
        {
            code: 'biddingHalfPage',
            sizes: [[300, 600]],
            bids: [
                {bidder: 'brealtime', params: { placementId: '9339525'}}, // CPXi - Diffen_Desktop_300x250_F Biddr  for 300x600
                //{bidder:"aol",params:{placement:"4249164",network:"10650.1",sizeId:"529",alias:"Diffen_Desktop_300x600_D"}}, // AOL Diffen_Desktop_300x600_D
                {bidder: 'defymedia', params: { placementId: '9354955'}}, // defymedia - Diffen_Desktop_300x250_F for 300x600
                {bidder: 'sekindo', params: { spaceId: '71224'}}          // sekindo - Diffen_Desktop_300x250_F for 300x600
                ,{bidder:"rubicon",params:{accountId:"15808",siteId:"105762",zoneId:"523920",sizes:[10]}} // Rubicon Diffen_HB_Desktop_160x600
                ,{bidder:"sovrn",params:{tagid:"391564"}} // Sovrn      Diffen_HB_Desktop_300x600
                ,{bidder: 'pulsepoint',params: {cf: '300X600',cp: 560645,ct: 516551}}  // Pulsepoint 300x600
            ]
        }
    ]);