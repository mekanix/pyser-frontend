#!/bin/sh


export BIN_DIR=`dirname $0`
export PROJECT_ROOT=`readlink -f "${BIN_DIR}/.."`
NPM=`which npm 2>/dev/null`
YARN=`which yarn 2>/dev/null`


if [ ! -z "${NPM}" ]; then
  export PACKAGE_MANAGER="${NPM}"
else
  export PACKAGE_MANAGER="${YARN}"
fi


setup() {
  if [ ! -e "${PROJECT_ROOT}/project.conf" ]; then
    echo -n "${PROJECT_ROOT}/project.conf" >&2
    echo " does not contain HTTP_PROXY" >&2
    echo "Example: HTTP_PROXY=http://localhost:5000" >&2
    echo -n "Enter HTTP_PROXY value: "
    read HTTP_PROXY
    echo "HTTP_PROXY=${HTTP_PROXY}" >"${PROJECT_ROOT}/project.conf"
  fi
  . "${PROJECT_ROOT}/project.conf"

  if [ -z "${PACKAGE_MANAGER}" ]; then
    echo "Install npm or yarn" >&2
    exit 1
  fi

  cd ${PROJECT_ROOT}
  sed -e "s;HTTP_PROXY;${HTTP_PROXY};g" package.json.tpl >package.json
  if [ "${OFFLINE}" != "yes" ]; then
    "${PACKAGE_MANAGER}" install
  fi
}
