export default {
  buttons: {
    // All button text is uppercased in the gui
    advanced: "LANJUTAN",
    transactions: "TRANSAKSI",
    all: "KABEH",
    back: "BALIK",
    browse: "BRUWAH",
    cancel: "BATAL",
    change: "OWAH",
    check: "PERIKSA",
    clear: "RESIKI",
    close: "TUTUP",
    contacts: "KONTAK",
    copyAddress: "SALIN ALAMAT",
    copyData: "SALIN DATA",
    copySignature: "SALIN BUKTI",
    createWallet: "GAWE DOMPET",
    decrypt: "DEKRIPSI",
    delete: "HAPUS",
    edit: "OWAHI",
    export: "EKSPOR",
    generate: "SEDIYAKAKE",
    import: "IMPOR",
    importWallet: "IMPOR DOMPET | IMPOR DOMPET-DOMPET",
    ons: "XEQMLABS NAME SERVICE",
    max: "MAKS",
    min: "MIN",
    next: "LANJUT",
    openWallet: "BUKA DOMPET",
    purchase: "TUKU",
    receive: "TERIMA",
    registerServiceNode: "DAFTAR NODE LAYANAN",
    renew: "ANYARI",
    rescan: "PINDAI ULANG",
    restoreWallet: "PULIHKAKE DOMPET",
    save: "SIMPEN",
    saveTxNotes: "SIMPEN CATETAN TX",
    selectLocation: "PILIH LOKASI",
    selectWalletFile: "PILIH FILE DOMPET",
    send: "KIRIM",
    sendCoins: "KIRIM KOIN",
    serviceNode: "NODE LAYANAN",
    networkStats: "STATISTIK JARINGAN",
    refresh: "SEGERAKE",
    settings: "SETELAN",
    showQRCode: "TUDUHAKE KODE QR",
    showTxDetails: "TUDUHAKE RINCIAN TX",
    sign: "TANDHA TANGAN",
    stake: "STAKE",
    sweepAll: "SAPU KABEH",
    unlock: "BUKA KUNCI",
    update: "ANYARI",
    verify: "VERIFIKASI",
    viewOnExplorer: "NDELENG ING PENJELAJAH"
  },
  dialog: {
    // Generic buttons
    buttons: {
      ok: "OK",
      cancel: "BATAL",
      open: "BUKA"
    },

    // Dialogs
    banPeer: {
      title: "Blokir peer",
      peerDetailsTitle: "Rincian peer",
      message: "Lebokake suwene wektu kanggo mblokir peer ing hitungan detik.\nDefault 3600 = 1 jam.",
      ok: "Blokir peer"
    },
    copyAddress: {
      title: "Salin alamat",
      message:
        "Ana id pembayaran sing digandhengake karo alamat iki.\nPastikake sampeyan nyalin id pembayaran kanthi kapisah."
    },
    copyPrivateKeys: {
      // Copy {seedWords/viewKey/spendKey}
      title: "Salin {type}",
      message:
        "Ati-ati marang sapa wae sing sampeyan kirimi kunci pribadi amarga kunci kasebut ngontrol dana sampeyan.",
      seedWords: "Tembung Winih (Seed Words)",
      viewKey: "Kunci Ndeleng (View Key)",
      spendKey: "Kunci Ngenggo (Spend Key)"
    },
    deleteWallet: {
      title: "Hapus dompet",
      message:
        "Apa sampeyan pancen yakin pengin mbusak dompet sampeyan?\nPastikake sampeyan wis nggawe serep kunci pribadi sampeyan.\nPROSES IKI ORA BISA DIBALIKAKE!",
      ok: "HAPUS"
    },
    exit: {
      title: "Metu",
      message: "Apa sampeyan yakin pengin metu?",
      ok: "METU"
    },
    exportTransfers: {
      title: "Ekspor Transfer menyang CSV",
      message: "Apa sampeyan pengin ngekspor transfer?",
      export: "Ekspor"
    },
    keyImages: {
      title: "Gambar kunci {type}",
      message: "Apa sampeyan pengin {type} gambar kunci?",
      export: "Ekspor",
      import: "Impor"
    },
    onsUpdate: {
      title: "Anyari rekaman ONS",
      message: "Apa sampeyan pengin nganyari rekaman ONS?",
      ok: "ANYARI"
    },
    noPassword: {
      title: "Ora ana sandi sing disetel",
      message: "Apa sampeyan yakin pengin nggawe dompet tanpa sandi?",
      ok: "IYA"
    },
    password: {
      title: "Sandi",
      message: "Lebokake sandi dompet kanggo nerusake."
    },
    purchase: {
      title: "Tuku jeneng",
      message: "Apa sampeyan pengin tuku jeneng kasebut?",
      ok: "TUKU"
    },
    renew: {
      title: "Anyari jeneng",
      message: "Apa sampeyan pengin nganyari jeneng kasebut?",
      ok: "ANYARI"
    },
    registerServiceNode: {
      title: "Daftar node layanan",
      message: "Apa sampeyan pengin ndaftar node layanan?",
      ok: "DAFTAR"
    },
    rescan: {
      title: "Pindai ulang dompet",
      message:
        "Pènget: Sawetara informasi babagan transaksi sadurunge\nkayata alame panampa bakal ilang.",
      ok: "PINDAI ULANG"
    },
    restart: {
      title: "Uripake ulang",
      message: "Owah-owahan mbutuhake urip ulang. Apa sampeyan pengin nguripake ulang saiki?",
      ok: "URIPAKE ULANG"
    },
    showPrivateKeys: {
      title: "Tuduhake kunci pribadi",
      message: "Apa sampeyan pengin ndeleng kunci pribadi sampeyan?",
      ok: "TUDUHAKE"
    },
    signature: {
      title: "Tandha tangan",
      message:
        "Salin data sing ditandatangani nganggo kunci pribadi alamat utama sampeyan ing ngisor iki"
    },
    stake: {
      title: "Stake",
      message: "Apa sampeyan pengin nindakake staking?",
      ok: "STAKE"
    },
    sweepAll: {
      title: "Sapu kabeh",
      message: "Apa sampeyan pengin nyapu kabeh dana?",
      ok: "SAPU KABEH"
    },
    sweepAllWarning: {
      title: "Pènget sapu kabeh",
      message:
        "Sampeyan bakal nggabungake kabeh dana sing durung digunakake kanthi ngirim transaksi menyang awake dhewe, dompet sampeyan bisa nuduhake saldo 0 kanggo sawetara wektu, sawise 10 blok dana sampeyan bakal mbukak kunci lan sampeyan bisa staking kanthi normal.",
      ok: "TERUSAKE"
    },
    switchWallet: {
      title: "Ganti dompet",
      closeMessage: "Apa sampeyan yakin pengin nutup dompet sing saiki?",
      restartMessage:
        "RPC dompet saiki lagi sinkronisasi. \nYen sampeyan pengin ganti dompet, sampeyan kudu nguripake ulang aplikasi. \nSampeyan bakal kelangan kemajuan sinkronisasi lan kudu mindai ulang blockchain maneh.",
      restartWalletMessage:
        "Yen sampeyan pengin ganti dompet, sampeyan kudu nguripake ulang aplikasi. Apa sampeyan yakin pengin nutup dompet saiki lan nguripake ulang?"
    },
    transactionDetails: {
      title: "Rincian transaksi",
      ok: "TUTUP"
    },
    transfer: {
      title: "Transfer",
      message: "Apa sampeyan pengin ngirim transaksi kasebut?",
      ok: "KIRIM"
    },
    confirmTransaction: {
      title: "Konfirmasi transaksi",
      sendTo: "Kirim menyang",
      priority: "Prioritas"
    },
    unlockConfirm: {
      title: "Konfirmasi bukak kunci",
      ok: "BUKA KUNCI"
    },
    unlockServiceNode: {
      title: "Buka kunci node layanan",
      confirmTitle: "Konfirmasi bukak kunci",
      message: "Apa sampeyan pengin mbuka kunci node layanan?",
      ok: "BUKA KUNCI"
    },
    unlockServiceNodeWarning: {
      title: "Pènget mbukak kunci node layanan",
      message:
        "Mbukak kunci sebagean stake ing sawijining node uga bakal mbatalake stake kanggo para peserta liyane, yen staking ing node bareng luwih becik ngandhani operator lan peserta liyane yen sampeyan arep mbatalake stake.",
      ok: "TERUSAKE"
    }
  },
  fieldLabels: {
    // Field labels are also all uppercased
    address: "ALAMAT",
    amount: "JUMLAH",
    backupOwner: "PEMILIK SEREP",
    confirmPassword: "KONFIRMASI SANDI",
    daemonLogLevel: "TINGKAT LOG DAEMON",
    daemonP2pPort: "PORT P2P DAEMON",
    data: "DATA",
    dataStoragePath: "JALUR PENYIMPANAN DATA (LOKASI FILE BLOCKCHAIN)",
    decryptRecord: "DEKRIPSI REKAMAN",
    exportTransfers: {
      exportDirectory: "DIREKTORI EKSPOR CSV"
    },
    filter: "SARING",
    filterTransactionType: "SARING MITURUT JENIS TRANSAKSI",
    internalWalletPort: "PORT DOMPET INTERNAL",
    keyImages: {
      exportDirectory: "DIREKTORI EKSPOR GAMBAR KUNCI",
      importFile: "FILE IMPOR GAMBAR KUNCI"
    },
    limitDownloadRate: "WATESI KECEPATAN UNDUH",
    limitUploadRate: "WATESI KECEPATAN UNGGAH",
    onsType: "JENIS REKAMAN ONS",
    localDaemonIP: "IP DAEMON LOKAL",
    localDaemonPort: "PORT DAEMON LOKAL",
    lokinetFullAddress: "ALAMAT LENGKAP LOKINET",
    maxIncomingPeers: "MAKS PEER MASUK",
    maxOutgoingPeers: "MAKS PEER METU",
    message: "PESAN",
    mnemonicSeed: "MNEMONIC SEED",
    name: "JENENG",
    newWalletName: "JENENG DOMPET ANYAR",
    notes: "CATETAN",
    optional: "OPSIONAL",
    owner: "PEMILIK",
    password: "SANDI",
    paymentId: "ID PEMBAYARAN",
    priority: "PRIORITAS",
    remoteNodeHost: "HOST NODE REKRE (REMOTE)",
    remoteNodePort: "PORT NODE REKRE (REMOTE)",
    restoreFromBlockHeight: "PULIHKAKE SAKING DHUWUR BLOK",
    restoreFromDate: "PULIHKAKE SAKING TANGGAL",
    seedLanguage: "BASA SEED",
    serviceNodeCommand: "PERINTAH NODE LAYANAN",
    serviceNodeKey: "KUNCI NODE LAYANAN",
    sessionId: "ID SESI",
    signature: "TANDHA TANGAN",
    transactionId: "ID TRANSAKSI",
    walletAddress: "ALAMAT DOMPET",
    walletFile: "FILE DOMPET",
    walletLogLevel: "TINGKAT LOG DOMPET",
    walletName: "JENENG DOMPET",
    walletRPCPort: "PORT RPC DOMPET",
    walletStoragePath: "JALUR PENYIMPANAN DOMPET",

    // These are specific labels which do not get uppercased
    confirmNewPassword: "Konfirmasi Sandi Anyar",
    newPassword: "Sandi Anyar",
    oldPassword: "Sandi Lawas",
    rescanFullBlockchain: "Pindai ulang blockchain lengkap",
    rescanSpentOutputs: "Pindai ulang output sing wis dinggo",
    transactionNotes: "Catetan Transaksi",
    chooseNetwork: "Pilih Jaringan",
    network: "Jaringan"
  },
  footer: {
    ready: "SIAP",
    scanning: "LAGI MINDAI",
    status: "Status",
    syncing: "LAGI SINKRONISASI...",
    remote: "Adoh (Remote)",
    wallet: "Dompet",
    updateRequired: "BUTUH DIANYARI"
  },
  menuItems: {
    about: "Babagan",
    changePassword: "Owah Sandi",
    copyAddress: "Salin alamat",
    copyBackupOwner: "Salin pemilik serep",
    copyLokinetAddress: "Salin alamat lokinet",
    copyLokinetName: "Salin jeneng lokinet",
    copyName: "Salin jeneng",
    copyOwner: "Salin pemilik",
    copyQR: "Salin kode QR",
    copySeedWords: "Salin tembung winih (seed words)",
    copySessionId: "Salin ID sesi",
    copySpendKey: "Salin spend key",
    copyServiceNodeKey: "Salin kunci node layanan",
    copyTransactionId: "Salin ID transaksi",
    copyViewKey: "Salin view key",
    createNewWallet: "Gawe dompet anyar",
    deleteWallet: "Hapus Dompet",
    exportTransfers: "Ekspor Transfer",
    exit: "Metu saka Dompet GUI XEQM",
    importOldGUIWallet: "Impor dompet saka GUI lawas",
    manageKeyImages: "Atur Gambar Kunci",
    openWallet: "Buka dompet",
    rescanWallet: "Pindai Ulang Dompet",
    restoreWalletFile: "Pulihake dompet saka file",
    restoreWalletSeed: "Pulihake dompet saka seed",
    saveQR: "Simpen kode QR menyang file",
    sendToThisAddress: "Kirim menyang alamat iki",
    settings: "Setelan",
    showDetails: "Tuduhake rincian",
    showPrivateKeys: "Tuduhake Kunci Pribadi",
    showQRCode: "Tuduhake Kode QR",
    switchWallet: "Ganti Dompet",
    viewOnExplorer: "Deleng ing penjelajah",
    refreshConnection: "Segerake Sambungan RPC"
  },
  notification: {
    positive: {
      addressCopied: "Alamat wis disalin menyang papan klip",
      backupOwnerCopied: "Pemilik serep wis disalin menyang papan klip",
      bannedPeer: "Mblokir {host} nganti {time}",
      copied: "{item} wis disalin menyang papan klip",
      decryptedONSRecord: "Kasil ndekrip Rekaman ONS kanggo {name}",
      exportTransfers: "Transfer wis diekspor menyang {filename}",
      itemSaved: "{item} wis disimpen ing {filename}",
      keyImages: {
        exported: "Gambar kunci wis diekspor menyang {filename}",
        imported: "Gambar kunci wis diimpor"
      },
      onsRecordUpdated: "Rekaman ONS kasil dianyari",
      lokinetAddressCopied: "Alamat lengkap lokinet wis disalin",
      lokinetNameCopied: "Jeneng lokinet wis disalin",
      passwordUpdated: "Sandi wis dianyari",
      namePurchased: "Jeneng kasil dituku",
      nameRenewed: "Jeneng kasil dianyari",
      nameCopied: "Jeneng wis disalin menyang papan klip",
      ownerCopied: "Pemilik wis disalin menyang papan klip",
      qrCopied: "Kode QR wis disalin menyang papan klip",
      registerServiceNodeSuccess: "Kasil ndaftar node layanan",
      sendSuccess: "Transaksi kasil dikirim",
      serviceNodeInfoFilled: "Kunci node layanan lan jumlah minimal wis diisi",
      sessionIdCopied: "ID Sesi wis disalin menyang papan klip",
      signatureCopied: "Bukti transaksi wis disalin menyang papan klip",
      signatureVerified: "Tandha tangan wis diverifikasi",
      stakeSuccess: "Kasil nindakake staking",
      transactionNotesSaved: "Catetan transaksi wis disimpen",
      walletCopied: "Alamat dompet wis disalin menyang papan klip"
    },
    errors: {
      banningPeer: "Gagal mblokir peer",
      cannotAccessRemoteNode:
        "Ora bisa ngakses node adoh, mangga coba node adoh liyane",
      changingPassword: "Gagal ngowahi sandi",
      copyWalletFail: "Gagal nyalin dompet",
      copyingPrivateKeys: "Gagal nyalin kunci pribadi",
      dataPathNotFound: "Jalur penyimpanan data ora ditemokake",
      decryptONSRecord: "Gagal ndekrip Rekaman ONS kanggo {name}",
      differentNetType: "Node adoh nggunakake nettype sing beda",
      enterSeedWords: "Lebokake tembung winih (seed words)",
      enterTransactionId: "Lebokake ID transaksi",
      enterTransactionProof: "Lebokake bukti transaksi",
      enterWalletName: "Lebokake jeneng dompet",
      enterName: "Lebokake jeneng",
      errorSavingItem: "Gagal nyimpen {item}",
      exportTransfers: "Gagal ngekspor transfer",
      failedServiceNodeUnlock: "Gagal mbuka kunci node layanan",
      failedToSetLanguage: "Gagal nyetel basa: {lang}",
      failedWalletImport: "Gagal ngimpor dompet",
      failedWalletOpen: "Gagal mbuka dompet. Mangga coba maneh.",
      failedWalletRead: "Gagal maca dompet-dompet",
      internalError: "Kesalahan internal",
      invalidAddress: "Mangga gunakake alamat XEQM sing sah",
      invalidAmount: "Jumlah ora sah",
      invalidBackupOwner: "Alamat pemilik serep ora sah",
      invalidNameLength: "Jeneng kudu antarane 1 lan 64 karakter dawane",
      invalidNameFormat:
        "Jeneng mung oleh isi alfanumerik, tanda hubung, lan garis ngisor (underscore)",
      invalidNameHypenNotAllowed:
        "Jeneng mung oleh diwiwiti utawa diakhiri nganggo alfanumerik utawa garis ngisor",
      invalidOldPassword: "Sandi lawas salah",
      invalidOwner: "Alamat pemilik ora sah",
      invalidPassword: "Sandi salah",
      invalidPaymentId: "ID pembayarane ora sah",
      invalidPrivateViewKey: "Kunci ndeleng pribadi (private viewkey) ora sah",
      invalidPublicAddress: "Alamat umum ora sah",
      invalidRestoreDate: "Tanggal pemulihan ora sah",
      invalidRestoreHeight: "Dhuwur pemulihan ora sah",
      invalidSeedLength: "Dawane tembung winih (seed) ora sah",
      invalidServiceNodeCommand:
        "Mangga lebokake perintah registrasi node layanan",
      invalidServiceNodeKey: "Kunci node layanan ora sah",
      invalidSessionId: "ID Sesi ora sah",
      invalidSignature: "Tandha tangan ora sah",
      invalidWalletPath: "Jalur dompet ora sah",
      keyImages: {
        exporting: "Gagal ngekspor gambar kunci",
        reading: "Gagal maca gambar kunci",
        importing: "Gagal ngimpor gambar kunci"
      },
      negativeAmount: "Jumlah ora oleh minus (negatif)",
      newPasswordNoMatch: "Sandi anyar ora cocog",
      newPasswordSame: "Sandi anyar kudu beda karo sing lawas",
      notEnoughBalance: "Saldo sing mbukak kunci ora cukup",
      passwordNoMatch: "Sandi ora cocog",
      remoteCannotBeReached: "Daemon adoh ora bisa digayuh",
      selectWalletFile: "Pilih file dompet",
      unknownError: "Ana kesalahan sing ora dingerteni",
      walletAlreadyExists: "Dompet kanthi jeneng kasebut wis ana",
      walletPathNotFound: "Jalur penyimpanan data dompet ora ditemokake",
      zeroAmount: "Jumlah kudu luwih gedhe tinimbang nol"
    },
    warnings: {
      noExportTransfers: "Ora ana transfer sing ditemokake kanggo diekspor",
      noKeyImageExport: "Ora ana gambar kunci sing ditemokake kanggo diekspor",
      usingLocalNode: "Ora bisa ngakses node adoh, ngalih menyang lokal wae",
      usingRemoteNode: "Daemon ora ditemokake, nggunakake node adoh"
    }
  },
  placeholders: {
    additionalNotes: "Catetan tambahan",
    addressBookName: "Jeneng sing nduweni alamat iki",
    addressOfSigner: "Alamat dompet umum saka penandatangan",
    dataToSign: "Data sing pengin sampeyan tandatangani nganggo kunci pribadi alamat utama",
    filterTx: "Lebokake ID, jeneng, alamat utawa jumlah",
    hexCharacters: "{count} karakter heksadesimal",
    onsName: "Jeneng sing bakal dituku liwat XEQMLabs Name Service",
    onsBackupOwner: "Alamat dompet saka pemilik serep",
    onsDecryptName: "Jeneng ONS sing sampeyan duweni",
    lokinetFullAddress:
      "Alamat lengkap lokinet kanggo dipetake menyang jeneng ONS (tanpa .loki)",
    mnemonicSeed: "25 (utawa 24) tembung mnemonic seed",
    pasteTransactionId: "Tempelake ID transaksi",
    pasteTransactionProof: "Tempelake bukti transaksi",
    proveOptionalMessage:
      "Pesan opsional sing dadi dhasar tandha tangan kasebut",
    recipientWalletAddress: "Alamat dompet panampa",
    selectAFile: "Mangga pilih file",
    sessionId: "ID Sesi kanggo disambungake menyang XEQMLabs Name Service",
    signature: "Tandha tangan sing bakal diverifikasi",
    transactionNotes: "Catetan tambahan lokal kanggo dilampirake ing transaksi",
    unsignedData: "Data sing katon sadurunge ditandatangani",
    walletAddress: "Alamat dompet kanggo dipetake menyang jeneng ONS",
    walletName: "Jeneng kanggo dompet sampeyan",
    walletPassword: "Sandi opsional kanggo dompet"
  },
  strings: {
    addAddressBookEntry: "Tambah entri buku alamat",
    addressBookDetails: "Rincian buku alamat",
    addressBookIsEmpty: "Buku alamat kosong",
    addresses: {
      myPrimaryAddress: "Alamat utamaku",
      myUnusedAddresses: "Alamatku sing durung dinggo",
      myUsedAddresses: "Alamatku sing wis dinggo",
      primaryAddress: "Alamat utama",
      subAddress: "Sub-alamat",
      subAddressIndex: "Indeks {index}"
    },
    advancedOptions: "Pilihan Lanjutan",
    awaitingConfirmation: "Ngenteni konfirmasi",
    bannedPeers: {
      title: "Peer sing diblokir (blokir bakal ilang yen dompet diuripake ulang)",
      bannedUntil: "Diblokir nganti {time}"
    },
    blockHeight: "Dhuwur",
    cannotSign: "Sampeyan ora bisa nandatangani nganggo dompet sing mung bisa dideleng (view only).",
    checkTransaction: {
      description:
        "Verifikasi manawa dana wis dibayar menyang alamat kanthi nyedhiyakake ID transaksi, alamat panampa, pesan sing digunakake kanggo nandatangani lan tandha tangane.\nKanggo 'Spend Proof' sampeyan ora perlu nyedhiyakake alamat panampa.",
      infoTitles: {
        confirmations: "Konfirmasi",
        inPool: "Ing pool",
        validTransaction: "Transaksi sah",
        received: "Jumlah sing ditampa"
      },
      validTransaction: {
        no: "ORA",
        yes: "IYO"
      }
    },
    closing: "Lagi nutup",
    connectingToBackend: "Lagi nyambung menyang backend",
    contribution: "Kontribusi",
    contributor: "Kontributor",
    daemon: {
      local: {
        title: "Mung Daemon Lokal",
        description:
          "Keamanan lengkap, dompet bakal ngundhuh kabeh blockchain. Sampeyan ora bakal bisa nindakake transaksi nganti sinkronisasi rampung."
      },
      localRemote: {
        title: "Daemon Lokal + Adoh",
        description:
          "Mulai kanthi cepet nganggo pilihan gawan iki. Dompet bakal ngundhuh kabeh blockchain, nanging nggunakake node adoh nalika proses sinkronisasi."
      },
      remote: {
        title: "Mung Daemon Adoh",
        description:
          "Keamanan luwih sithik, dompet bakal nyambung menyang node adoh kanggo nindakake kabeh transaksi."
      }
    },
    destinationUnknown: "Tujuan Ora Dingerteni",
    editAddressBookEntry: "Owahi entri buku alamat",
    expirationHeight: "Dhuwur kadaluwarsa",
    nextPayout: "Pembayaran sabanjure",
    ons: {
      sessionID: "ID Sesi",
      wallet: "Alamat Dompet",
      lokinetName1Year: "Jeneng Lokinet 1 taun",
      lokinetNameXYears: "Jeneng Lokinet {years} taun",
      prices: "Rega ONS:"
    },
    onsPurchaseDescription:
      "Tuku utawa anyari rekaman ONS. Yen sampeyan tuku jeneng, bisa uga butuh wektu semenit utawa rong menit kanggo katon ing dhaptar.",
    onsDescription:
      "Ing kene sampeyan bisa nemokake kabeh jeneng ONS sing diduweni dening dompet iki. Ndekrip rekaman sing sampeyan duweni bakal nuduhake jeneng lan nilai saka rekaman ONS kasebut.",
    hardwareWallet: "Dompet hardware",
    hardwareWallets: "Dompet hardware-hardware",
    loadingSettings: "Lagi ngamot setelan",
    xeqmBalance: "Saldo",
    lokinetNameDescription:
      "Tuku utawa anyari jeneng ing Lokinet. Yen sampeyan tuku jeneng, bisa uga butuh wektu semenit utawa rong menit kanggo katon ing dhaptar. Kanggo sinau luwih lengkap babagan lokinet, mangga kunjungi: ",
    xeqmAccumulatedRewards: "Ganjaran sing dikumpulake",
    xeqmUnlockedBalance: "Saldo sing mbukak kunci",
    xeqmUnlockedShort: "Mbukak kunci",
    me: "Aku",
    noTransactionsFound: "Ora ana transaksi sing ditemokake",
    notes: "Catetan",
    numberOfUnspentOutputs: "Jumlah output sing durung dinggo",
    operator: "Operator",
    paymentID: "ID Pembayaran",
    peerList: "Dhaptar peer",
    priorityOptions: {
      automatic: "Otomatis",
      slow: "Alon",
      normal: "Normal",
      fast: "Cepet",
      fastest: "Paling Cepet",
      blink: "Blink"
    },

    proveTransactionDescription:
      "Gawé bukti kriptografi saka sawijining transaksi. Tempelake ID Transaksi lan alamat panampa ing ngisor iki, banjur klik Sediyakake.",
    proveTransactionConfirmationNote:
      "Mangga enteni paling ora 50 konfirmasi sadurunge nggawe bukti. Nyoba kakehan awal bisa uga gagal.",
    readingWalletList: "Lagi maca dhaptar dompet",
    recentIncomingTransactionsToAddress:
      "Conto transaksi mlebu menyang alamat iki",
    recentTransactionsWithAddress: "Transaksi pungkasan karo alamat iki",
    regularWallets: "Dompet biasa",
    rescanModalDescription:
      "Pilih pindai ulang lengkap utawa pindai ulang output sing wis dinggo wae.",
    saveSeedWarning: "Mangga salin lan simpen iki ing lokasi sing aman!",
    saveToAddressBook: "Simpen menyang buku alamat",
    seedWords: "Tembung winih (Seed words)",
    selectLanguage: "Pilih basa",
    serviceNodeContributionDescription:
      "Staking menehi kontribusi marang keamane jaringan XEQMLabs. Kanggo kontribusi sampeyan, sampeyan bakal entuk XEQM. Sawise di-stake, sampeyan kudu ngenteni antarane 15 utawa 30 dina kanggo mbukak kunci XEQM sampeyan, gumantung apa stake kasebut dibukak kunci dening kontributor utawa node kasebut dibusak saka registrasi. Kanggo sinau luwih lengkap babagan staking, mangga kunjungi dokumentasi ing",
    serviceNodeRegistrationDescription:
      'Lebokake perintah {registerCommand} sing diasilake dening daemon sing ndaftar dadi Node Layanan nggunakake perintah "{prepareCommand}"',
    serviceNodeStartStakingDescription:
      "Kanggo miwiti staking, mangga kunjungi tab Staking",
    noServiceNodesCurrentlyAvailable:
      "Saiki ora ana node layanan sing kasedhiya kanggo kontribusi",
    serviceNodeDetails: {
      contributors: "Para Kontributor",
      lastRewardBlockHeight: "Dhuwur blok ganjaran pungkasan",
      lastUptimeProof: "Bukti uptime pungkasan",
      maxContribution: "Kontribusi maks",
      minContribution: "Kontribusi min",
      operatorFee: "Biaya Operator",
      registrationHeight: "Dhuwur registrasi",
      unlockHeight: "Dhuwur bukak kunci",
      reserved: "Dipesen",
      serviceNodeKey: "Kunci Node Layanan",
      snKey: "Kunci SN",
      stakingRequirement: "Syarat staking",
      totalContributed: "Total sing dikontribusike"
    },
    signAndVerifyDescription:
      "Tandatangani data nganggo kunci pribadi alamat utama sampeyan utawa verifikasi tandha tangan marang alamat umum.",
    spendKey: "Spend key",
    stake: "Staking",
    startingDaemon: "Miwiti daemon",
    startingWallet: "Miwiti dompet",
    switchToDateSelect: "Ngalih menyang pilih tanggal",
    switchToHeightSelect: "Ngalih menyang pilih dhuwur blok",
    syncingDaemon: "Sinkronisasi Daemon",
    transactionID: "ID Transaksi",
    transactionConfirmed: "dikonfirmasi",
    transactions: {
      amount: "Jumlah",
      description: "Transaksi {type}",
      fee: "Biaya",
      paidBySender: "dibayar dening pangirim",
      received: "Ditampa",
      sent: "Dikirim",
      sentTo: "Transaksi {type} dikirim menyang",
      timestamp: "Riwayat wektune",
      types: {
        all: "Kabeh",
        incoming: "Mlebu",
        outgoing: "Metu",
        pending: "Ngenteni (Pending)",
        pendingIncoming: "Mlebu sing ngenteni",
        pendingOutgoing: "Metu sing ngenteni",
        miner: "Penambang (Miner)",
        serviceNode: "Node Layanan",
        governance: "Tata Kelola",
        stake: "Stake",
        failed: "Gagal"
      }
    },
    unlockingAtHeight: "Mbukak kunci ing dhuwur {number}",
    unspentOutputs: "Output sing durung dinggo",
    userNotUsedAddress: "Sampeyan durung nggunakake alamat iki",
    userUsedAddress: "Sampeyan wis nggunakake alamat iki",
    viewKey: "View key",
    viewOnlyMode:
      "Mode mung ndeleng (view only). Mangga amot dompet lengkap kanggo ngirim koin.",
    website: "situs web"
  },
  titles: {
    transactionSent: "Transaksi Dikirim",
    addressBook: "Buku alamat",
    addressDetails: "Rincian alamat",
    advanced: {
      checkTransaction: "PERIKSA TRANSAKSI",
      prove: "BUKTI",
      signAndVerify: "TANDHA/VERIFIKASI",
      sign: "Tandhan",
      verify: "Verifikasi"
    },
    availableForContribution: "Node layanan sing kasedhiya kanggo kontribusi",
    changePassword: "Owah sandi",
    configure: "Konfigurasi",
    currentlyStakedNodes: "Node sing lagi di-stake saiki",
    onsRecordDetails: "Rincian rekaman ONS",
    onsSessionRecords: "Rekaman sesi",
    onsLokinetRecords: "Rekaman Lokinet",
    onsWalletRecords: "Rekaman dompet",
    privateKeys: "Kunci pribadi",
    rescanWallet: "Pindai ulang dompet",
    ons: {
      purchase: "TUKU",
      myOns: "ONS-KU"
    },
    serviceNode: {
      registration: "Dhaftar",
      staking: "STAKING",
      myStakes: "STAKE-KU"
    },

    serviceNodeDetails: "Rincian node layanan",
    networkStats: "Statistik Jaringan",
    totalServiceNodes: "Total Node Layanan",
    activeServiceNodes: "Node Layanan Aktif",
    allServiceNodes: "Kabeh Node Layanan",
    settings: {
      title: "Setelan",
      tabs: {
        general: "Umum",
        language: "Basa",
        peers: "Peer",
        troubleshooting: "Pamecahan Masalah"
      }
    },
    transactionDetails: "Rincian transaksi",
    transactions: "Transaksi",
    wallet: {
      createNew: "Gawe dompet anyar",
      createdOrRestored: "Dompet digawe/dipulihake",
      importFromFile: "Impor dompet saka file",
      importFromOldGUI: "Impor dompet saka GUI lawas",
      restoreFromSeed: "Pulihake dompet saka seed",
      restoreViewOnly: "Pulihake dompet mung-ndeleng"
    },
    welcome: "Sugeng Rawuh",
    yourWallets: "Dompet Sampeyan"
  }
};
