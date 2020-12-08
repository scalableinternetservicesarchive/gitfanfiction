
import Redis from 'ioredis';

const treeCache = new Redis();

exports.treeCache = treeCache;