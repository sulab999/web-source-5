<?php
class dirlistBlock extends block {
    public function run($zym_10) {
        if (!isset($zym_10['novelid'])) return array();
        $zym_7 = $this->pt->input->param('num', 'int', 0, $zym_10);
        $zym_5 = intval($zym_10['novelid']);
        if ($zym_7) {
            $zym_12 = (new NovelSearch_LogModel())->where(array(
                'novelid' => $zym_5
            ))->field('siteid')->limit($zym_7)->select();
        } else {
            $zym_12 = (new NovelSearch_LogModel())->where(array(
                'novelid' => $zym_5
            ))->field('siteid')->select();
        }
        if ($zym_12) {
            $zym_11 = [];
            $zym_6 = dc::get('novelsearch_info', $zym_5, 'novel.pinyin');
            foreach ($zym_12 as $zym_9) {
                $zym_8 = dc::get('novelsearch_site', $zym_9['siteid']);
                if ($zym_8['status']) {
                    $zym_9['sitename'] = $zym_8['name'];
                    $zym_9['url_dir'] = U('novelsearch.novel.dir', array(
                        'siteid' => $zym_9['siteid'],
                        'sitekey' => $zym_8['key'],
                        'novelid' => $zym_5,
                        'novelkey' => $zym_6
                    ));
                    $zym_9['url_chapterlist'] = U('novelsearch.chapter.list', array(
                        'siteid' => $zym_9['siteid'],
                        'sitekey' => $zym_8['key'],
                        'novelid' => $zym_5,
                        'novelkey' => $zym_6,
                        'page' => 1
                    ));
                    $zym_11[] = $zym_9;
                }
            }
            return $zym_11;
        }
        return array();
    }
}
?>
