const networks = {
  public: 'public',
  test: 'test',
  local: 'local',
}

const hostnameToNetwork = hostname => {
  if (hostname === 'explorer.ion.one' || hostname === 'publicnet.local')
    return networks.public
  else if (hostname === 'test-explorer.ion.one' || hostname === 'testnet.local')
    return networks.test
  else return networks.local
}

export {networks as default, hostnameToNetwork}
